<template>
  <main>
    <h1>Instalace</h1>
    <div class="points">
      <div class="point">
        <img :src="install1" alt="Instalace 1" />
        <i
          >Při prvním otevření vás prohlížeč sám vyzve, abyste si aplikaci
          přidali na plochu.</i
        >
      </div>
      <div class="point">
        <img :src="install2" alt="Instalace 2" />
        <i>Stejného efektu lze dosáhnout otevřením postranního menu...</i>
      </div>
      <div class="point">
        <img :src="install3" alt="Instalace 3" />
        <i>... a stisknutím tlačítka "Přidat na plochu".</i>
      </div>
      <div class="point">
        <img :src="install4" alt="Instalace 4" />
        <i>Svou volbu pak potvrdíte stisknutím tlačítka "Přidat".</i>
      </div>
    </div>
    <router-link to="/#aplikace">
      <button><b>Zpět</b></button>
    </router-link>
  </main>
</template>

<script>
import install1 from '@/assets/img/installation/install_1.webp'
import install2 from '@/assets/img/installation/install_2.webp'
import install3 from '@/assets/img/installation/install_3.webp'
import install4 from '@/assets/img/installation/install_4.webp'

export default {
  data() {
    return { install1, install2, install3, install4 }
  },
}
</script>

<style lang="sass" scoped>
main
  padding-top: 63px
  margin: auto

.points
  display: flex
  flex-wrap: wrap
  justify-content: center
  .point
    display: grid
    margin: 10px
    width: 400px
    justify-items: center
    img
      max-height: 80vh
    i
      margin-top: 10px
      width: 80%
      @include small-device
        width: 100%
        padding-bottom: 20px
        margin-bottom: 10px
        border-bottom: 2px solid $grey
button
  text-align: center
  margin: 5vh auto
  border: 1px solid $grey
  border-radius: 10px
  background-color: $primary
  cursor: pointer
  width: 20vw
  min-width: 350px
  min-height: 50px
  @include small-device-portrait
    width: 95%
  @include transition(background-color)
  &:hover
    background-color: $accent
  b
    font-size: 1rem
</style>
