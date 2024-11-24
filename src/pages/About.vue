<template>
  <main>
    <h1>O projektu</h1>
    <p>
      Koncept projektu “Zapomenutá Orlová” vznikl na konci roku 2019 a jeho
      první fáze byla dokončena na jaře 2021. Cílem projektu je zvětšit povědomí
      o dnes již zapomenutých místech v našem městě, která bývala dříve jeho
      centrem a pokusit se o zvýšení turismu v Orlové 1. Proto jsme vybrali 12
      unikátních historických lokací v této oblasti, které bychom chtěli
      představit široké veřejnosti.
    </p>
    <p>
      Jedná se o zcela studentský projekt, který bylo možno uskutečnit za pomoci
      participativního rozpočtu Města Orlové.
    </p>
    <p>
      V roce 2024 byla stezka pod záštitou spolku
      <a href="https://orlovanafurt.cz/">Orlová na furt!</a> rozšířena o čtyři
      další cedule. Rozšíření finančně podpořil spolek
      <a href="https://orlovanafurt.cz/">Orlová na furt!</a> a Město Orlová.
    </p>

    <h2>Poděkování</h2>

    <p>
      Chtěli bychom velmi poděkovat Městu Orlová za tuto příležitost a veškerou
      pomoc. Bez něj by tento projekt nebyl možný, jsme rádi za to, že nám jej
      pomohli realizovat. Zvláště pak paní <b>DiS. Petře Ožanové</b> z úřadu
      starosty za její čas a kontrolu nad projektem, která nás provázela celou
      cestu. Také bychom chtěli poděkovat Muzeu Těšínska za korekturu
      historických textů. Jmenovite jeho řediteli
      <b>PaedDr. Zbyškovi Ondřekovi</b> a historičce
      <b>Mgr. Lence Novákové, Ph.D.</b> Dále také panu
      <b>Ing. Luboši Plucarovi</b> za cenné rady a pomoc s opravou historických
      nesrovnalostí. Za pomoc s korekturou a opravou gramatických chyb děkujeme
      <b>Mgr. Pavlíně Tobolové</b>. A nesmíme zapomenout na pamětníky, historiky
      amatéry a jiné zájemce o tento projekt. Děkujeme všem za informace a
      neustálou podporu. Všem z vás jsme hluboce zavázáni.
    </p>

    <p>
      Za pomoc s rozšířením děkujeme
      <a href="https://www.muzeumct.cz/">Muzeu těšínska</a>, Mgr. Pavlíně
      Tobolové,
      <a href="https://www.msid.cz/">MSID - regionální rozvojová agentura</a>,
      spolku <a href="http://starakarvina.cz/"> Stará Karviná </a>,
      <a href="https://www.facebook.com/reklamkaVaC/">VaC design sro</a>
      a společnosti <a href="https://www.dpb.cz/">Green Gas DPB, a.s.</a>
    </p>

    <h2>Feedback</h2>
    <p>
      Chcete nám zanechat zprávu? Jak se Vám stezka líbila? Máte návrh na další
      historická místa, která by si zasloužila představení veřejnosti, nebo máte
      jakýkoliv jiný dotaz? Neváhejte nás kontaktovat na:
      <br />
    </p>

    <span class="links">
      <a href="mailto:zapomenuta.orlova@gmail.com">
        <fa :icon="['fas', 'envelope']" />
        <span>zapomenuta.orlova@gmail.com</span>
      </a>
      <br />
      <a
        href="http://www.facebook.com/zapomenuta.orlova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa :icon="['fab', 'facebook-f']" />
        <span>facebook.com/zapomenuta.orlova</span>
      </a>
    </span>

    <h2 class="team_h">Náš tým</h2>
    <div class="team flex">
      <span class="member">
        <img v-lazy="require('@/assets/img/about/Ondra.webp')" alt="" />
        <div>
          <b>Ondřej Chlubna</b>
          <i>vedoucí projektu</i>
        </div>
        <span class="links">
          <a href="mailto:ondrej.chlubna01@gmail.com">
            <fa :icon="['fas', 'envelope']" />
            <span> ondrej.chlubna01@gmail.com </span>
          </a>
        </span>
      </span>
      <span class="member">
        <img v-lazy="require('@/assets/img/about/Vítek.webp')" alt="" />
        <div>
          <b>Vítek Jurčák</b>
          <i>textař/historik</i>
        </div>
        <span class="links">
          <a href="mailto:jurcak72@gmail.com">
            <fa :icon="['fas', 'envelope']" />
            <span> jurcak72@gmail.com </span>
          </a>
        </span>
      </span>
      <span class="member">
        <img v-lazy="require('@/assets/img/about/Avatar.svg')" alt="" />
        <div>
          <b>Petr Gajdošík</b>
          <b>(Tarasa24)</b>
          <i>web developer</i>
        </div>
        <span class="links">
          <a href="mailto:tarasa24@tarasa24.dev">
            <fa :icon="['fas', 'envelope']" />
            <span> tarasa24@tarasa24.dev </span>
          </a>
          <a
            href="https://github.com/Tarasa24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <fa :icon="['fab', 'github']" />
            <span> github.com/Tarasa24 </span>
          </a>
          <a
            href="https://tarasa24.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <fa :icon="['fas', 'globe']" />
            <span> tarasa24.dev </span>
          </a>
        </span>
      </span>
      <span class="member">
        <img v-lazy="require('@/assets/img/about/Avatar.svg')" alt="" />
        <div>
          <b>Kristýna Kiliková</b>
          <i>grafik</i>
        </div>
        <span class="links">
          <a href="mailto:kkilik333@gmail.com">
            <fa :icon="['fas', 'envelope']" />
            <span> kkilik333@gmail.com </span>
          </a>
        </span>
      </span>
    </div>

    <Media />
  </main>
</template>

<script>
import Media from '../components/Media.vue'

export default {
  components: { Media },
}
</script>

<style lang="sass" scoped>
main
  max-width: 1300px
  margin: auto
  padding: 2vh 7.5vw
  padding-top: 63px
  text-align: left
  @include small-device
    padding-left: 20px
    padding-right: 20px
  p
    margin-left: 1em

.flex
  display: flex
  justify-content: center
  img
    width: 15vw
    max-width: 150px
    min-width: 90px
    margin: 2vw
    border-radius: 50%

.team_h
  text-align: center
  font-size: 2rem
  margin-top: 5vh

.team
  flex-flow: wrap
  margin-bottom: 5vh
  div
    display: grid
    font-size: 0.9rem
    text-align: center
  a
    margin-top: 10px
  span
    img
      border: 2px solid white

.member
  display: grid
  justify-items: center
  align-items: center
  grid-template-rows: auto 60px 120px
  margin: 10px
  width: 250px
  border: 1px solid $grey
  border-radius: 15px

.links
  margin-top: 10px
  display: block
  a
    font-size: 1.5rem
    text-decoration: none
    color: black
    margin-left: .7em
    &:first-of-type
      margin-top: 0
    display: flex
    align-items: center
    @include transition(color)
    svg
      @include transition(transform)
      margin: 0 5px
    span
      font-size: .9rem
      margin-left: 5px
    &:hover
      color: $primary
      svg
        transform: scale(1.25)
</style>
