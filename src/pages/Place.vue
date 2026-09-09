<template>
  <main>
    <section class="head">
      <img
        class="main_img"
        :src="place.name ? mainImage : emptyImg"
        alt="background image"
      />
      <div>
        <svg width="60" height="60">
          <circle cx="30" cy="30" r="30" fill="#FCBA03" />
          <text
            text-anchor="middle"
            x="30"
            y="42"
            fill="white"
            font-weight="bold"
            font-size="35"
          >
            {{ place.nth }}
          </text>
        </svg>
        <h1>
          {{ place.name ? stripLabelPrefix(place.name) : '' }}
        </h1>
        <h4>
          <i>{{ convertCoord(place.lat, place.lng) }}</i>
        </h4>
      </div>
    </section>

    <div class="cover">
      <section class="body" v-html="body" />
      <section>
        <hr />
        <viewer
          :images="images"
          class="gallery"
          :options="{
            inline: false,
            button: true,
            navbar: false,
            title: true,
            toolbar: true,
            tooltip: true,
            movable: false,
            zoomable: true,
            rotatable: false,
            scalable: false,
            transition: false,
            fullscreen: true,
            keyboard: true,
          }"
        >
          <img
            v-for="image in images"
            :src="globFind(articleImages, `/${place.name}/${image.file}`)"
            :key="image.file"
            :alt="image.alt"
          />
        </viewer>
      </section>
      <section>
        <hr />
        <router-link :to="'/prameny?s=' + place.name" class="sources"
          >Zdroje <fa :icon="['fas', 'external-link-alt']"
        /></router-link>
      </section>
    </div>
  </main>
</template>

<script>
import marked from 'marked'
import data from '@/assets/data/locations.json'
import emptyImg from '@/assets/img/empty.png'
import {
  convertCoord,
  displayLabel,
  stripLabelPrefix,
  globFind,
} from '@/assets/js/helperFunctions.js'

const mainImages = import.meta.glob('@/assets/img/articles/*/main.webp', {
  eager: true,
  import: 'default',
})
const articleImages = import.meta.glob('@/assets/img/articles/*/*.webp', {
  eager: true,
  import: 'default',
})
const articleLists = import.meta.glob('@/assets/img/articles/*/list.json', {
  eager: true,
  import: 'default',
})
const articleTexts = import.meta.glob('@/assets/data/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export default {
  components: {},
  data() {
    return {
      place: {},
      body: '',
      images: [],
      convertCoord: convertCoord,
      emptyImg,
      mainImage: null,
      articleImages,
    }
  },
  methods: {
    globFind,
    stripLabelPrefix,
  },
  created() {
    if (
      typeof Object.entries(data)[this.$route.params.index - 1] === 'undefined'
    )
      this.$router.replace('/mapa')
    else {
      const [name, details] = Object.entries(data)[this.$route.params.index - 1]
      this.place = details

      this.place.name = name
      this.place.nth = displayLabel(name, this.$route.params.index - 1)

      this.mainImage = globFind(mainImages, `/${this.place.name}/main.webp`)

      const md = marked(globFind(articleTexts, `/${this.place.name}.md`))
      const re = /<a href="\/misto\/.+">(.+)<\/a>/g
      this.body = md.replaceAll(
        re,
        `
      <a href="/misto/$1">
        <svg width="28" height="28">
          <circle cx="14" cy="14" r="14" />
          <text text-anchor="middle" x="14" y="20" fill="white" font-weight="bold" font-size="17">$1</text>
        </svg>
      </a>
      `
      )

      this.images = globFind(articleLists, `/${this.place.name}/list.json`)
    }
  },
}
</script>

<style lang="sass">
section
  width: 100%
  max-width: 1300px
  margin: auto
.head
  position: relative
  max-width: unset
  .main_img
    width: 100%
    min-height: 200%
    object-fit: cover
    filter: brightness(.4)
    z-index: -99
    position: absolute
    left: 0
    top: calc( -50% - 63px )
    @include small-device
      top: 0
      min-height: 100%
  div
    width: 60%
    padding: calc(12.5vh + 63px) 0 5vh 0
    margin: auto
    @include small-device-portrait
      width: 100%
    @include small-device-landscape
      width: 80%
    h1
      margin-top: 25px
      margin-bottom: 0
      color: white
      text-transform: uppercase
      font-size: 3.5rem
      @include small-device
        font-size: 2.25rem
    h4
      color: white

.cover
  width: 100%
  background-color: white
  min-height: 100vh

.body
  text-align: justify
  width: calc( 100% - 20px )
  padding: 10px 10px 0 10px
  ul
    margin-right: 10px
    li
      margin: 7.5px 0
      svg
        transform: translate(0px, 25%)
        circle
          fill: $primary
          @include transition(fill)
        text
          fill: 'white'
        &:hover
          circle
            fill: $accent

hr
  margin: 30px 10px

.gallery
  width: 100%
  overflow-x: auto
  display: flex
  margin-bottom: 20px
  img
    align-self: center
    padding: 10px 10px
    cursor: pointer
    max-width: 65%
    max-height: 25vh
    &:first-of-type
      padding-left: 25px
    &:last-of-type
      padding-right: 25px
.viewer-title
  font-size: 1.25rem
  color: white
  opacity: 1
  white-space: unset
  margin-top: 10px
  @include small-device-portrait
    margin-left: 0
    margin-right: 0
    max-width: 95%
</style>

<style lang="sass" scoped>
.sources
  cursor: pointer
  padding-bottom: 20px
  color: grey
  font-size: .9rem
  @include transition(color)
  &:hover
    color: $primary
</style>
