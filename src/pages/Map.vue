<template>
  <main>
    <l-map
      :zoom="15"
      v-model:center="center"
      :maxBounds="[
        [49.7500600534, 18.107126193],
        [49.9503805554, 18.7595699213],
      ]"
      :minZoom="14"
      :maxZoom="18"
      :options="{
        zoomSnap: 0.5,
        zoomControl: false,
      }"
      class="map"
      ref="map"
      @ready="onMapReady"
    >
      <l-tile-layer
        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <l-control-zoom position="topright" />
      <l-control-scale position="bottomright" :imperial="false" />
      <l-marker
        v-for="([name, details], index) in places"
        :key="name"
        :lat-lng="[details.lat, details.lng]"
        @click="
          () => {
            if ($route.query.h !== index + 1)
              $router.push({ path: '/mapa', query: { h: index + 1 } })
            zoomTo(details.lat, details.lng)
          }
        "
        :ref="(el) => setMarkerRef(el, index)"
      >
        <l-icon
          :popupAnchor="[0, -50]"
          :iconSize="[50, 50]"
          :iconAnchor="[25, 50]"
          :icon-url="highlighted != index ? pinIcon : pinHighlightedIcon"
          :shadowUrl="emptyIcon"
        />
        <l-popup class="popup">
          <router-link :to="`/misto/${index + 1}`">
            <b>{{ displayLabel(name, index) }}.{{ stripLabelPrefix(name) }}</b>
            <br />
            <i>{{ convertCoord(details.lat, details.lng) }}</i>
            <br />
            <img :src="globFind(thumbImages, `/${name}.webp`)" :alt="name" />
          </router-link>
        </l-popup>
      </l-marker>

      <span v-if="lookForPosition">
        <l-circle
          @click="zoomTo(position.lat, position.lng, false)"
          :latLng="[position.lat, position.lng]"
          :radius="position.acc / 2"
          :color="positionAvailible ? '#FCBA03' : '#232B2B'"
          :fillColor="positionAvailible ? '#FCBA03' : 'grey'"
        />
        <l-circle-marker
          @click="zoomTo(position.lat, position.lng, false)"
          :latLng="[position.lat, position.lng]"
          :radius="7.5"
          :fill="true"
          :fillColor="positionAvailible ? '#FC5D03' : 'grey'"
          :fillOpacity="1"
          color="#232B2B"
        />
      </span>
    </l-map>

    <aside v-bind:class="{ opened: open, closed: !open }">
      <div class="list">
        <h2>Seznam</h2>
        <ol>
          <li
            v-for="{ entry: [name, details], index } in sortedForDisplay"
            :key="index"
          >
            <router-link
              v-if="labelParts(name, index).lead"
              :to="`/misto/${index + 1}`"
              >{{ labelParts(name, index).lead }}</router-link
            ><span class="tail"
              ><router-link :to="`/misto/${index + 1}`">{{
                labelParts(name, index).last
              }}</router-link
              ><button
                class="zoom"
                @click="
                  () => {
                    if ($route.query.h !== index + 1)
                      $router.push({ path: '/mapa', query: { h: index + 1 } })
                    zoomTo(details.lat, details.lng)
                    markerRefs[index].leafletObject.openPopup()
                  }
                "
                aria-label="Přiblížit"
                title="Přiblížit"
              >
                <fa :icon="['fas', 'map-marker-alt']" /></button
            ></span>
          </li>
        </ol>

        <div class="downloadMap">
          <a href="/zapomenutaorlova-muor-cz.pdf">Mapa ke stažení</a>
        </div>
      </div>
      <button
        class="sideBtn"
        v-if="open"
        @click="handleClick"
        aria-label="Zmenšit postranní menu"
      >
        &lt;
      </button>
      <button
        class="sideBtn"
        v-else
        @click="handleClick"
        aria-label="Zvětšit postranní menu"
      >
        &gt;
      </button>
    </aside>
  </main>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LControlZoom,
  LControlScale,
  LMarker,
  LPopup,
  LIcon,
  LCircle,
  LCircleMarker,
} from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'

import data from '@/assets/data/locations.json'
import {
  convertCoord,
  displayLabel,
  stripLabelPrefix,
  globFind,
} from '@/assets/js/helperFunctions.js'
import pinIcon from '@/assets/img/pin.svg'
import pinHighlightedIcon from '@/assets/img/pin_highlighted.svg'
import emptyIcon from '@/assets/img/empty.png'

const thumbImages = import.meta.glob('@/assets/img/thumb/*.webp', {
  eager: true,
  import: 'default',
})

export default {
  name: 'Example',
  components: {
    LMap,
    LTileLayer,
    LControlZoom,
    LControlScale,
    LMarker,
    LPopup,
    LIcon,
    LCircle,
    LCircleMarker,
  },
  data() {
    return {
      safeScreen: window.innerWidth >= 700,
      open: window.innerWidth >= 700,
      center: [49.846198, 18.429747],
      places: Object.entries(data),
      highlighted: null,
      convertCoord: convertCoord,
      displayLabel: displayLabel,
      stripLabelPrefix: stripLabelPrefix,
      position: { lat: 0, lng: 0, acc: 0 },
      lookForPosition: true,
      positionAvailible: false,
      watchId: null,
      markerRefs: [],
      thumbImages,
      pinIcon,
      pinHighlightedIcon,
      emptyIcon,
    }
  },
  computed: {
    // Purely visual re-ordering for the sidebar list: places 1-12 keep
    // their original sequence first, then R/O prefixed places are
    // grouped and sorted by letter (R before O) and number. The TRUE
    // original `index` is carried alongside each entry so links, the
    // zoom query param, and markerRefs lookups stay unaffected — only
    // rendering order changes here.
    sortedForDisplay() {
      const letterRank = { R: 0, O: 1 }

      return this.places
        .map((entry, index) => ({ entry, index }))
        .sort((a, b) => {
          const aExtra = a.index >= 12
          const bExtra = b.index >= 12

          if (!aExtra && !bExtra) return a.index - b.index
          if (!aExtra) return -1
          if (!bExtra) return 1

          const aMatch = a.entry[0].match(/^([A-Z])(\d+)\./)
          const bMatch = b.entry[0].match(/^([A-Z])(\d+)\./)
          const aLetter = aMatch ? aMatch[1] : ''
          const bLetter = bMatch ? bMatch[1] : ''

          if (aLetter !== bLetter)
            return (letterRank[aLetter] ?? 99) - (letterRank[bLetter] ?? 99)

          const aNum = aMatch ? parseInt(aMatch[2], 10) : 0
          const bNum = bMatch ? parseInt(bMatch[2], 10) : 0
          return aNum - bNum
        })
    },
  },
  watch: {
    '$route.query.h': function () {
      this.highlighted = this.$route.query.h - 1
    },
  },
  created() {
    // safeScreen listener
    window.addEventListener('resize', this.updateSafeScreen)

    // selected pin handeling
    this.highlighted = this.$route.query.h - 1

    // position handeling
    this.watchPosition()
  },
  unmounted() {
    this.lookForPosition = false
    if (this.watchId !== null) navigator.geolocation.clearWatch(this.watchId)
    window.removeEventListener('resize', this.updateSafeScreen)
  },
  methods: {
    globFind,
    setMarkerRef(el, index) {
      this.markerRefs[index] = el
    },
    updateSafeScreen() {
      this.safeScreen = window.innerWidth >= 700
    },
    // Split a place name's displayed label ("3. Zámecký park a
    // bývalý zámek") into everything-but-the-last-word (`lead`) and
    // the final word (`last`). The template renders `last` and the
    // trailing zoom icon inside one white-space:nowrap wrapper, so the
    // icon can never be orphaned onto a line by itself: if there's no
    // room, the whole last word wraps down together with its icon.
    // This lets normal inline flow place the icon immediately after
    // the real last character for free — no per-item JS measurement.
    labelParts(name, index) {
      const full = `${displayLabel(name, index)}. ${stripLabelPrefix(name)}`
      const at = full.lastIndexOf(' ')
      if (at === -1) return { lead: '', last: full }
      // `lead` keeps the trailing space so the two words stay visually
      // separated; the template must not add its own whitespace, since
      // Vue would collapse a space sitting against an element boundary.
      return { lead: full.slice(0, at + 1), last: full.slice(at + 1) }
    },
    onMapReady() {
      // The @ready event fires as soon as vue-leaflet creates the
      // underlying Leaflet map, but the exposed leafletObject proxy on
      // template refs can lag by a tick in production builds, so wait
      // for that before touching $refs.
      this.$nextTick(() => {
        this.$refs.map.leafletObject.on('popupclose', () => {
          this.highlighted = null
        })

        if (this.$route.query.h) {
          const place = this.places[this.highlighted][1]
          this.center = this.calculateOffset(place.lat, place.lng)
          this.markerRefs[this.highlighted].leafletObject.openPopup()
        }
      })
    },
    handleClick() {
      const el = document.getElementsByTagName('aside')[0]

      el.animate(
        [
          { left: this.open ? '0' : '-355px' },
          { left: this.open ? '-355px' : '0' },
        ],
        {
          duration: 500,
          easing: 'ease-in-out',
        }
      )
      el.style.left = this.open ? '-355px' : '0'

      this.open = !this.open

      if (this.safeScreen && this.places[this.highlighted]) {
        const place = this.places[this.highlighted][1]
        this.zoomTo(place.lat, place.lng)
      }
    },
    zoomTo(x, y, offset = true) {
      this.center = offset ? this.calculateOffset(x, y) : [x, y]

      if (this.open && !this.safeScreen) this.handleClick()
    },
    calculateOffset(x, y) {
      const map = this.$refs.map.leafletObject
      var center = map.project([x, y])

      center.x = center.x

      center = new L.point(
        center.x - (this.open && this.safeScreen ? 375 / 2 : 0),
        center.y - 140
      )
      var target = map.unproject(center)

      return [target.lat, target.lng]
    },
    watchPosition() {
      if (!navigator.geolocation) {
        this.lookForPosition = false
        return
      }

      this.watchId = navigator.geolocation.watchPosition(
        (geo) => {
          const position = geo.coords

          this.positionAvailible = true
          this.position = {
            availible: true,
            lat: position.latitude,
            lng: position.longitude,
            acc: position.accuracy,
          }
        },
        (err) => {
          this.positionAvailible = false

          // PERMISSION_DENIED: stop watching entirely, don't retry/re-prompt
          if (err.code === 1) {
            this.lookForPosition = false
            if (this.watchId !== null) {
              navigator.geolocation.clearWatch(this.watchId)
              this.watchId = null
            }
          }
        }
      )
    },
  },
}
</script>

<style lang="sass" scoped>
.map
  position: fixed !important
  bottom: 0
  height: calc(100vh - 63px)
  width: 100%
  .popup
    text-align: center
    a
      text-decoration: none
      color: black
    b
      text-decoration: underline
      @include transition(color)
    img
      width: 100%
      max-width: 180px
      height: 120px
      object-fit: cover
      @include transition(transform)
    &:hover
      b
        color: $accent
      img
        transform: scale(.95)

aside
  position: fixed
  top: 63px
  left: 0
  z-index: 1001
  width: 375px
  min-height: 100vh
  background-color: rgba(white, 0.7)
  display: grid
  grid-template-columns: auto 20px
  text-align: left
  h2
    margin: 12.5px
    text-align: center
  .sideBtn
    height: 100%
    border: 0
    color: white
    font-weight: bold
    background-color: $bg-dark
    cursor: pointer
    position: sticky
    right: 0
    left: 0

    grid-column: 2
    grid-row: 1 / span 3

    &:hover
      background-color: black
  .list
    @include small-device
      overflow: auto
      height: calc(100vh - 63px)
    ol
      margin: 0
      list-style: none
      font-size: 1.25rem
      // Small right gutter so a name whose last word would otherwise
      // sit flush against the sidebar-toggle edge instead wraps that
      // word (together with its glued icon) to the next line, keeping
      // comfortable clearance without ever stranding the icon alone.
      padding-right: 12px
      @include small-device-portrait
        font-size: 1rem
      li
        a
          color: black
          text-decoration: none
        // The final word of the name and its trailing zoom icon share
        // one nowrap wrapper, so normal inline flow always places the
        // icon immediately after the real last character, and the two
        // can never be split across a line break (no orphaned icon).
        .tail
          white-space: nowrap
        .zoom
          padding: 0
          margin-left: 6px
          vertical-align: baseline
  .zoom
    background-color: transparent
    border: 0
    font-size: 1.25rem
    cursor: pointer
    color: $primary

.closed
  left: -355px

.downloadMap
  text-align: center
  margin-top: 1em
  a
    color: black
</style>
