<template>
  <div class="gdpr" v-if="consent === null">
    <h4>Souhlas se zpracováním údajů</h4>
    <p>
      V rámci analýzy návštevnosti našeho webu používáme službu Google
      Analytics. V souladu s GDPR vám nabízíme možnost se této analýzy
      neúčastnit.
    </p>
    <span>
      <button class="accept" @click="set(1)">Příjmout</button>
      <button class="deny" @click="set(0)">Odmítnout</button>
    </span>
  </div>
</template>

<script>
import { addGtag } from 'vue-gtag'

export default {
  data() {
    return {
      consent: window.localStorage.getItem('consent'),
    }
  },
  mounted() {
    if (this.consent === '1') this.enablePlugin()
  },
  methods: {
    set(b) {
      window.localStorage.setItem('consent', b)
      this.consent = b

      if (b) this.enablePlugin()
    },
    enablePlugin() {
      addGtag()
    },
  },
}
</script>

<style lang="sass" scoped>
.gdpr
  position: fixed
  bottom: 10px
  right: 10px
  @include small-device-portrait
    width: calc(100% - 40px)
  background-color: black
  color: white
  padding: 5px 10px
  width: 30vw
  z-index: 999999

button
  cursor: pointer
  padding: 10px
  margin: 0 10px
  height: 35px
  font-weight: bold
  text-transform: uppercase
  border: 1px solid black
  border-radius: 5px

.accept
  background-color: black
  color: $primary
  @include transition(background-color, color)
  &:hover
    background-color: $primary
    color: black

.deny
  background-color: black
  color: $grey
  @include transition(border-color)
  &:hover
    border-color: $grey
</style>
