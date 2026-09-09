<template>
  <nav>
    <router-link to="/" class="logo">
      <img class="logo" :src="logo" alt="logo" loading="lazy" />
    </router-link>

    <router-link
      class="link"
      v-bind:class="{ highlighted: path == '/mapa' }"
      to="/mapa"
      >Mapa</router-link
    >
    <router-link
      class="link"
      v-bind:class="{ highlighted: path == '/o-projektu' }"
      to="/o-projektu"
      >O projektu</router-link
    >
    <router-link
      class="link"
      v-bind:class="{ highlighted: path == '/prameny' }"
      to="/prameny"
      >Prameny</router-link
    >

    <a
      href="https://www.mesto-orlova.cz/"
      target="_blank"
      rel="noopener noreferrer"
      class="orlova"
    >
      <img :src="orlova" alt="Město Orlová logo" loading="lazy" />
    </a>
  </nav>
</template>

<script>
import logo from '@/assets/img/logo.webp'
import orlova from '@/assets/img/orlova.webp'

export default {
  data() {
    return {
      path: undefined,
      logo,
      orlova,
    }
  },
  watch: {
    $route: function () {
      this.path = this.$route.path
    },
  },
}
</script>

<style lang="sass" scoped>
nav
  display: grid
  grid-template-columns: 75px 100px 100px 100px auto 75px
  background-color: $bg-dark
  align-items: center
  height: 63px
  position: fixed
  width: 100%
  z-index: 2014
  overflow-x: auto
  overflow-y: hidden
  white-space: nowrap

.logo
  border-bottom: 0
  height: 63px

.link
  color: white
  text-decoration: none
  padding: 20px 0
  border-bottom: 5px solid transparent
  @include transition(border-bottom)
  &:hover
    border-bottom: 5px solid $primary

.highlighted
  border-bottom: 5px solid $primary

.orlova
  grid-column: 6
  justify-self: right
  height: min-content
  margin-right: 10px
  img
    height: 50px
</style>
