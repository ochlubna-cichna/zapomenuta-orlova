<template>
  <main>
    <div
      class="parallax top-parallax"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)),url(${
          parallaxArr[0] ? parallaxArr[0].src : null
        })`,
      }"
    />

    <section class="segment1 flex">
      <div>
        <img class="circle-img" :src="logoBg" alt="" loading="lazy" />
        <h1>ZAPOMENUTÁ ORLOVÁ</h1>
        <p>
          Vítejte na webu stezky Zapomenutou Orlovou. Jedná se unikátní projekt
          s cílem přivést znovu do povědomí již dávno zapomenutá místa z
          orlovské historie, které bývaly dříve chloubou našeho města. I když
          kvůli negativním vlivům důlní činnosti muselo být bývalé centrum
          přesunuto, určitě to neznamená, že by mělo být opomíjeno. Proto bychom
          vám jej chtěli přiblížit a provést vás historií těchto úchvatných
          lokací, dnes již na pokraji vymizení.
        </p>
        <br />
        <p>
          Stezka obsahuje celkem 12 cedulí roztroušených u významných staveb
          Staré Orlové.
        </p>
        <a href="#aplikace">
          <button>
            <b>APLIKACE</b>
            <fa :icon="['fas', 'chevron-down']" />
          </button>
        </a>
      </div>
    </section>

    <div
      class="parallax"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)),url(${
          parallaxArr[1] ? parallaxArr[1].src : null
        })`,
      }"
    />

    <section class="flex" id="aplikace">
      <img class="circle-img" :src="downloadIcon" alt="" loading="lazy" />
      <div>
        <h2>APLIKACE</h2>
        <p>
          Tato stránka je postavená na technologii PWA, což znamená že je
          přístupná, jak ve formě webové stránky, tak ve formě instalovatelné
          aplikace, která vás bude provázet a to bez nutnosti připojení k
          internetu. Doporučujeme si tedy předem stáhnout naši aplikaci a
          vyrazit na cestu!
        </p>
        <br />
        <p>
          Podrobný návod, jak aplikaci stáhnout a nainstalovat je k dispozici
          <router-link to="/instalace">ZDE</router-link>.
        </p>
        <a href="#outdoor">
          <button>
            <b>OUTDOOROVÉ HRY</b>
            <fa :icon="['fas', 'chevron-down']" />
          </button>
        </a>
      </div>
    </section>

    <div
      class="parallax"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)),url(${
          parallaxArr[2] ? parallaxArr[2].src : null
        })`,
      }"
    />

    <section id="outdoor">
      <div>
        <h2>OUTDOOROVÉ HRY</h2>
        <p>
          Součástí historických cedulí je i série geokeší Zapomenutá Orlová v
          outdooorové hře Geocaching. Doprovází je také štítky hry Munzee.
        </p>
        <div class="flex">
          <a
            href="https://www.geocaching.com/seek/nearest.aspx?u=Zapomenuta_Orlova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <img
                class="circle-img"
                :src="geocachingImg"
                alt="Geocaching"
                loading="lazy"
              />
              <b>Geocaching</b>
            </span>
          </a>
          <a
            href="https://www.munzee.com/map/u2v5e65z8/14.4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <img
                class="circle-img"
                :src="munzeeImg"
                alt="Munzee"
                loading="lazy"
              />
              <b>Munzee</b>
            </span>
          </a>
        </div>
        <a href="#mapa">
          <button>
            <b>MAPA</b>
            <fa :icon="['fas', 'chevron-down']" />
          </button>
        </a>
      </div>
    </section>

    <div
      class="parallax"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)),url(${
          parallaxArr[3] ? parallaxArr[3].src : null
        })`,
      }"
    />

    <section class="flex" id="mapa">
      <img class="circle-img" :src="mapIcon" alt="map icon" loading="lazy" />
      <div>
        <h2>MAPA</h2>
        <p>
          Na následující mapě naleznete všechny zapojené místa i s umístěním
          cedulí. Nebojte se na ně kliknout a přečíst si náležité texty o jejich
          historii. Naleznete u nich také dobové fotografie, historická fakta a
          další zajímavá místa v okolí. Mapa rovněž zobrazuje vaší polohu, a tak
          se nemusíte obávat, že se ztratíte.
        </p>
        <router-link to="/mapa">
          <button>
            <b>Otevřít</b>
          </button>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import locations from '../assets/data/locations.json'
import { globFind } from '@/assets/js/helperFunctions.js'
import logoBg from '@/assets/img/logo_bg.webp'
import downloadIcon from '@/assets/img/home/download.svg'
import geocachingImg from '@/assets/img/home/geocaching.webp'
import munzeeImg from '@/assets/img/home/munzee.webp'
import mapIcon from '@/assets/img/home/map.svg'

const mainImages = import.meta.glob('@/assets/img/articles/*/main.webp', {
  eager: true,
  import: 'default',
})

export default {
  name: 'Home',
  data() {
    return {
      parallaxArr: [{ src: '', index: '' }],
      logoBg,
      downloadIcon,
      geocachingImg,
      munzeeImg,
      mapIcon,
    }
  },
  mounted() {
    let array = this.shuffle(Object.keys(locations))
    for (let i = 0; i < array.length; i++)
      array[i] = {
        src: globFind(mainImages, `/${array[i]}/main.webp`),
        index: Object.keys(locations).indexOf(array[i]),
      }

    this.parallaxArr = array
  },
  methods: {
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
  },
}
</script>

<style lang="sass" scoped>
.parallax
  height: 80vh
  width: 100%
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover

h1, h2
  margin-top: 5px

section
  background-color: white
  padding: 63px 15vw 2vh 15vw
  width: calc(100% - 30vw)
  @include small-device
    padding: 63px 5vw 2vh 5vw
    width: calc(100% - 10vw)
  display: flex
  align-items: center
  min-height: calc(100vh - 63px)
  & > div
    width: 100%
  .circle-img
    height: 25vh
    min-height: 150px
    max-height: 250px
    border: 1px solid $grey
    border-radius: 50%
    margin: auto
  h2
    font-size: 3rem
    @include small-device-portrait
      font-size: 2rem
  p
    margin: 0 5vw
  a
    text-decoration: none
  button
    display: grid
    text-align: center
    margin: 5vh auto
    border: 1px solid $grey
    border-radius: 10px
    background-color: $primary
    cursor: pointer
    width: 20vw
    min-width: 250px
    min-height: 50px
    justify-items: center
    align-items: center
    @include small-device-portrait
      width: 100%
    @include transition(background-color)
    &:hover
      background-color: $accent
    b
      font-size: 1rem

.segment1, #aplikace
  a
    text-decoration: none

#aplikace, #mapa
  @include small-device-portrait
    display: grid
  h2
    @include small-device-landscape
      font-size: 1.75rem

.top-parallax
  height: 40vh
  @include small-device-portrait
    height: calc(45vh - 63px/2)
  @include small-device-landscape
    height: calc(60vh - 63px/2)

.segment1
  position: relative
  min-height: 70vh
  @include small-device-portrait
    min-height: 55vh
  @include small-device-landscape
    min-height: 40vh
  .circle-img
    position: absolute
    top: 0
    left: 50%
    transform: translate(-50%, -50%)
    background-color: white
    border: 15px solid white
  h1
    position: relative
    font-size: 4rem
    z-index: 1
    margin-top: 2vh
    @include small-device
      font-size: 2rem
    @include small-device-portrait
      margin-top: 5vh
    @include small-device-landscape
      margin-top: 7.5vh

#outdoor
  h2
    @include small-device-landscape
      font-size: 2.2rem
  .circle-img
    @include small-device-portrait
      height: 17.5vh
      min-height: 100px
  .flex
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      text-decoration: none
      color: black
      margin: 2vh 5vw
      @include transition(transform)
      &:hover
        transform: scale(.9)
    span
      display: grid
    b
      margin-top: 20px
      font-size: 1.5rem
</style>
