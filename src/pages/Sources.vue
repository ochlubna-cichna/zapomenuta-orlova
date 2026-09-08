<template>
  <main>
    <h1>Historické prameny</h1>
    <div class="sources" id="sources">
      <h2>Obecné knižní zdroje:</h2>
      <ul>
        <li>Dějiny Orlové – MěÚ Orlová, 1993</li>
        <li>
          Dějiny města Orlové v datech – k 90. výročí povýšení Orlové na město
          1922-2012 – Město Orlová, 2013
        </li>
        <li>Orlová v proměnách času – Město Orlová, 2010</li>
      </ul>

      <h2>Obecné internetové zdroje:</h2>
      <ul>
        <li>
          <a
            href="http://www.fonorama.cz/odkazy/Toulky%20Orlovou.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >Toulky rodáků Orlovou</a
          >
        </li>
        <li>
          <a
            href="https://www.mesto-orlova.cz/images_clanek/16286_1.jpg"
            target="_blank"
            rel="noopener noreferrer"
            >Psali o nás: Karvinský a Havířovský deník - na webu města Orlové</a
          >
        </li>
        <li>
          <a
            href="https://www.mesto-orlova.cz/cz/mesto/historie-v-datech/"
            target="_blank"
            rel="noopener noreferrer"
            >Historie v datech – Město Orlová</a
          >
        </li>
      </ul>

      <h2>Konkrétní internetové zdroje:</h2>
      <ol>
        <li>
          <button @click="toggleLinks('Vlakové nádraží')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Vlakové nádraží')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Vlakové nádraží</h4>
          </button>

          <div v-show="toggeledList.includes('Vlakové nádraží')">
            <a
              href="https://kolejcieszyn.pl/303c.php?s=orlova"
              target="_blank"
              rel="noopener noreferrer"
              >Koleje Śląska Cieszyńskiego – Orlová</a
            >
            <a
              href="https://www.zsr.sk/o-nas/historia-zeleznic/prve-zeleznice/prve-zeleznicne-podniky/kosicko-bohuminska-zeleznica/"
              target="_blank"
              rel="noopener noreferrer"
              >Košicko-bohumínska železnica – ŽSR</a
            >
            <a
              href="https://cs.wikipedia.org/wiki/Orlov%C3%A1_(n%C3%A1dra%C5%BE%C3%AD)"
              target="_blank"
              rel="noopener noreferrer"
              >Orlová (nádraží) – Wikipedie</a
            >
            <a
              href="https://www.atlaskolejowy.net/"
              target="_blank"
              rel="noopener noreferrer"
              >Atlas Kolejowy Polski, Czech i Słowacji</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Kostel Narození Panny Marie')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Kostel Narození Panny Marie')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Kostel Narození Panny Marie</h4>
          </button>

          <div v-show="toggeledList.includes('Kostel Narození Panny Marie')">
            <a
              href="https://www.mesto-orlova.cz/cz/mesto/pamatky/13301-farni-kostel-narozeni-panny-marie.html"
              target="_blank"
              rel="noopener noreferrer"
              >Farní kostel Narození Panny Marie – Město Orlová</a
            >
            <a
              href="https://www.mesto-orlova.cz/cz/mesto/historie-a-soucasnost/"
              target="_blank"
              rel="noopener noreferrer"
              >Historie a současnost – Město Orlová</a
            >
            <a
              href="https://cs.wikipedia.org/wiki/Kostel_Narozen%C3%AD_Panny_Marie_(Orlov%C3%A1)"
              target="_blank"
              rel="noopener noreferrer"
              >Kostel Narození Panny Marie (Orlová) – Wikipedie</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Zámecký park a bývalý zámek')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Zámecký park a bývalý zámek')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Zámecký park a bývalý zámek</h4>
          </button>

          <div v-show="toggeledList.includes('Zámecký park a bývalý zámek')">
            <a
              href="https://www.mesto-orlova.cz/cz/radnice/zivotni-prostredi/ochrana-krajiny-prirody/14136-zamecky-park.html"
              target="_blank"
              rel="noopener noreferrer"
              >Zámecký park – Město Orlová</a
            >
            <a
              href="https://www.archives.cz/web/resources/soka_karvina/Orlovsky_zamek.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >ORLOVSKÝ ZÁMEK</a
            >
            <a
              href="http://www.digitalniknihovna.cz/svkos/view/uuid:1b6485a0-7812-11dd-9d85-0013d398622b?page=uuid:eebfb7c0-780e-11dd-a57b-0013d398622b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Těšínsko 1966 | Moravskoslezská vědecká knihovna v Ostravě |
              Digitální knihovna Kramerius – Nemocnice v Orlové (od str. 3)</a
            >
            <a
              href="http://www.digitalniknihovna.cz/svkos/view/uuid:142f5c60-6bbe-11de-9614-0013d398622b?page=uuid:6dbdfef0-6b99-11de-bc44-0013d398622b&fulltext=z%C3%A1mek%20v%20Orlov%C3%A9"
              target="_blank"
              rel="noopener noreferrer"
              >Noviny Těšínské 21.12.1901 | Moravskoslezská vědecká knihovna v
              Ostravě | Digitální knihovna Kramerius – Nemocnice v Orlové (str.
              4, 3. Odstavec)</a
            >
            <a
              href="http://nspka.cz/cs/zdravotnik/z-nasi-historie.html"
              target="_blank"
              rel="noopener noreferrer"
              >Nemocnice s poliklinikou Karviná-Ráj | Z naší historie</a
            >
            <a
              href="http://www.digitalniknihovna.cz/svkos/view/uuid:c901b130-7824-11dd-8568-0013d398622b?page=uuid:7c882020-7822-11dd-b254-0013d398622b"
              target="_blank"
              rel="noopener noreferrer"
              >Těšínsko 1968 | Moravskoslezská vědecká knihovna v Ostravě |
              Digitální knihovna Kramerius</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Dělnický dům')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Dělnický dům')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Dělnický dům</h4>
          </button>

          <div v-show="toggeledList.includes('Dělnický dům')">
            <a
              href="http://www.digitalniknihovna.cz/svkos/view/uuid:5cd861f0-2705-11e1-81a2-0013d398622b?page=uuid:c5b3e770-2a44-11e1-9b28-0013d398622b&fulltext=orlov%C3%A9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Žalujeme! – Josef Pergl (pozn.: průběh dělnické stávky na
              Ostravsku v dubnu 1925 – o Orlové je zmínka na str. 20-27 a
              31-32); Digitální knihovna Moravskoslezské vědecké knihovny v
              Ostravě</a
            >
            <a
              href="http://www.digitalniknihovna.cz/svkos/view/uuid:9a4711b0-78dc-11dd-925c-0013d398622b?page=uuid:9b1907b0-78dc-11dd-8d6e-0013d398622b"
              target="_blank"
              rel="noopener noreferrer"
              >Dělnický dům v Orlové dosloužil (str. 7 – 9): Těšínsko –
              Vlastivědný časopis; Digitální knihovna Moravskoslezské vědecké
              knihovny v Ostravě</a
            >
            <a
              href="http://www.digitalniknihovna.cz/svkos/view/uuid:f9bfbbc0-1cb7-11e0-a3b9-0013d398622b?page=uuid:7c1d5b50-1cb2-11e0-ae87-0013d398622b&fulltext=d%C4%9Blnick%C3%BD%20d%C5%AFm%20orlov%C3%A1"
              target="_blank"
              rel="noopener noreferrer"
              >Obrana Slezska – Dělnický dům v Orlové (pozvánka na VŠ přednášku
              na 1. straně); Digitální knihovna Moravskoslezské vědecké knihovny
              v Ostravě</a
            >
            <a
              href="http://www.digitalniknihovna.cz/svkos/view/uuid:28f6a2d0-1c92-11e0-864e-0013d398622b?page=uuid:a0c78670-1a63-11e0-8e9c-0013d398622b"
              target="_blank"
              rel="noopener noreferrer"
              >Obrana Slezska – 50 tisíc Poláků ukradli Čechové (str. 1+ pokr.
              Na str. 2 s článkem Sčítání lidu v Orlové); Digitální knihovna
              Moravskoslezské vědecké knihovny v Ostravě</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Polské gymnázium Juliusze Słowackiego')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Polské gymnázium Juliusze Słowackiego')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Polské gymnázium Juliusze Słowackiego</h4>
          </button>

          <div
            v-show="
              toggeledList.includes('Polské gymnázium Juliusze Słowackiego')
            "
          >
            <a
              href="https://www.gympol.cz/Szkola_Historia_Gimnazjum/0"
              target="_blank"
              rel="noopener noreferrer"
              >Polskie Gimnazjum im. Juliusza Słowackiego, Český Těšín,
              příspěvková organizace - HISTORIA GIMNAZJUM</a
            >
            <a
              href="https://cs.zwrot.cz/2019/10/polske-gymnazium-slavi-jubileum/"
              target="_blank"
              rel="noopener noreferrer"
              >Polské gymnázium slaví jubileum – Zwrot</a
            >
            <a
              href="https://karvinsky.denik.cz/zpravy_region/20090606_gymnazium_orlova_polske_oslavy.html"
              target="_blank"
              rel="noopener noreferrer"
              >Karvinský deník 6. 6. 2009 - V Orlové si připomněli 100 let
              polského gymnázia</a
            >
            <a
              href="https://audiovis.nac.gov.pl/obraz/202946/"
              target="_blank"
              rel="noopener noreferrer"
              >Narodowe Archiwum Cyfrowe</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Židovský templ')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Židovský templ')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Židovský templ</h4>
          </button>

          <div v-show="toggeledList.includes('Židovský templ')">
            <a
              href="https://publik.tuwien.ac.at/files/publik_255253.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >Virtuelle Rekonstruktion der Synagoge in Orlová (Orlau)</a
            >
            <a
              href="https://cs.wikipedia.org/wiki/Synagoga_v_Orlov%C3%A9"
              target="_blank"
              rel="noopener noreferrer"
              >Synagoga v Orlové – Wikipedie</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Evangelický kostel')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Evangelický kostel')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Evangelický kostel</h4>
          </button>

          <div v-show="toggeledList.includes('Evangelický kostel')">
            <a
              href="http://orlovasceav.cz"
              target="_blank"
              rel="noopener noreferrer"
              >SCEAV Orlová</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('České gymnázium')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('České gymnázium')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>České gymnázium</h4>
          </button>

          <div v-show="toggeledList.includes('České gymnázium')">
            <a
              href="https://detektorweb.info/index.4me?s=show&lang=1&i=35013&mm=1&xb=6&vd=1&PHPSSIDWx=e4ae1d27bf1028aa303565be964c7838"
              target="_blank"
              rel="noopener noreferrer"
              >Naše město za okupace - Detektorweb.cz - Detektory kovů</a
            >
            <a
              href="https://www.goa-orlova.cz/"
              target="_blank"
              rel="noopener noreferrer"
              >GOA Orlová</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Věčný oheň')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Věčný oheň')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Věčný oheň</h4>
          </button>

          <div v-show="toggeledList.includes('Věčný oheň')">
            <a
              href="https://www.mesto-bohumin.cz/cz/zpravodajstvi/novinove-clanky/12680-metan-horel-skoro-dvacet-let-jako-vecny-ohen.html"
              target="_blank"
              rel="noopener noreferrer"
              >Metan hořel skoro dvacet let jako "věčný oheň" - Novinové články
              - Zpravodajství - Město Bohumín</a
            >
            <span
              >Moravskoslezský deník 30. 8. 1927 | Orlová doplatila na centrálně
              usměrňovanou výstavbu</span
            >
            <a
              href="https://szypa.estranky.cz/"
              target="_blank"
              rel="noopener noreferrer"
              >Orlová historická - szypa.estranky.cz</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Husův dům')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Husův dům')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Husův dům</h4>
          </button>

          <div v-show="toggeledList.includes('Husův dům')">
            <span
              >Český bratr 11.1927 | Moravská zemská knihovna | Digitální
              knihovna Kramerius</span
            >
            <span
              >Český bratr 07.-08.1928 | Moravská zemská knihovna | Digitální
              knihovna Kramerius</span
            >
            <span
              >Český bratr 02.1929 | Moravská zemská knihovna | Digitální
              knihovna Kramerius</span
            >
            <span
              >Český bratr 02.1930 | Moravská zemská knihovna | Digitální
              knihovna Kramerius</span
            >
            <span
              >Český bratr 02.02.1939 | Moravská zemská knihovna | Digitální
              knihovna Kramerius</span
            >
            <span
              >Český bratr 09.1949 | Moravská zemská knihovna | Digitální
              knihovna Kramerius</span
            >
            <span
              >Český bratr 12.1954 | Moravská zemská knihovna | Digitální
              knihovna Kramerius</span
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Pomník padlým za Těšínsko')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Pomník padlým za Těšínsko')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Pomník padlým za Těšínsko</h4>
          </button>

          <div v-show="toggeledList.includes('Pomník padlým za Těšínsko')">
            <span
              >Lidové noviny 1.10.1928 | Moravská zemská knihovna | Digitální
              knihovna Kramerius</span
            >
            <span
              >Jiří Bílek – Kyselá těšínská jablíčka: Československo-polské
              konflikty o Těšínsko 1919, 1938, 1945 (2018)</span
            >
            <a
              href="https://www.lepsi-orlova.cz/cz/aktuality/12-obnova-pamatniku-padlym-za-tesinsko-na-hrbitove-v-orlove.html"
              target="_blank"
              rel="noopener noreferrer"
              >OBNOVA PAMÁTNÍKU PADLÝM ZA TĚŠÍNSKO NA HŘBITOVĚ V ORLOVÉ - lepší
              orlová</a
            >
            <a
              href="https://zpravy.tiscali.cz/tragedie-pri-niz-cechoslovaci-a-polaci-navzajem-prolevali-krev-320835"
              target="_blank"
              rel="noopener noreferrer"
              >Tragédie, při níž Čechoslováci a Poláci navzájem prolévali krev -
              tiscali.cz</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Důl Žofie')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Důl Žofie')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Důl Žofie</h4>
          </button>

          <div v-show="toggeledList.includes('Důl Žofie')">
            <a
              href="http://podzemi.solvayovylomy.cz/histhor/lokality/okr/00.html"
              target="_blank"
              rel="noopener noreferrer"
              >DĚJINY DOLOVÁNÍ UHLÍ V OKD</a
            >
            <a
              href="https://www.zdarbuh.cz/reviry/okd/historie-dolu-zofie-v-orlove/"
              target="_blank"
              rel="noopener noreferrer"
              >Dobývání uhlí na Dole Žofie v Orlové - zdař bůh .cz</a
            >
            <a
              href="http://podzemi.solvayovylomy.cz/histhor/lokality/okr/63.htm"
              target="_blank"
              rel="noopener noreferrer"
              >Důl Žofie - Historie hornictví - nejen Hornictví .info</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Úzkorozchodná tramvaj')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Úzkorozchodná tramvaj')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Úzkorozchodná tramvaj</h4>
          </button>

          <div v-show="toggeledList.includes('Úzkorozchodná tramvaj')">
            <span>
              Od koňky k Sedanu : historie úzkorozchodných drah na Ostravsku a
              Karvinsku : 1902-1973 – Dopravní podnik Ostrava, 2004
            </span>
            <a
              href="https://www.cs-dopravak.cz/osud-uzkorozchodek-v-ostrave-byl-rozhodnut-uz-po-valce-cast-i/"
              target="_blank"
              rel="noopener noreferrer"
              >Osud úzkorozchodek v Ostravě byl rozhodnut už po válce –
              Československý dopravák</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Sokolovna')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Sokolovna')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Sokolovna</h4>
          </button>

          <div v-show="toggeledList.includes('Sokolovna')">
            <a
              href="http://www.fonorama.cz/odkazy/Orlov%C3%A1%20ve%20fotografii%202004.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orlová ve fotografii – Klub přátel staré Orlové, 2004</a
            >
            <a
              href="http://www.fonorama.cz/fanzin/f_07/jamsession_07.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Malá hudební historie Orlové – Hudební klub muzikantů a jejich
              příznivců v Orlové, 2013</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('býv. Spořitelna')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('býv. Spořitelna')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>býv. Spořitelna</h4>
          </button>

          <div v-show="toggeledList.includes('býv. Spořitelna')">
            <span>Orlová 1223-1973 – Městský národní výbor (Orlová), 1973</span>
            <a
              href="https://www.archives.cz/web/soka/karvina/projekt/resources/karvina/Mestska_sporitelna_v_Orlove.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mgr. Trojak, Marek: Spořitelnu v Orlové postavili za osm měsíců. –
              Právo, 2004</a
            >
            <a
              href="https://mko.knihovna-orlova.cz/mestska-knihovna-orlova/historie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Historie – Městská knihovna Orlová</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Eduard Hořovský')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Eduard Hořovský')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Eduard Hořovský</h4>
          </button>

          <div v-show="toggeledList.includes('Eduard Hořovský')">
            <a
              href="http://www.joern.de/horovsky.htm"
              target="_blank"
              rel="noopener noreferrer"
              >Ing. Eduard Hořovský; Biographische Skizze – 1927</a
            >
            <span
              >Biografický slovník Slezska a severní Moravy (s. 48) –
              Universitas Ostraviensis, 1993</span
            >
            <span
              >O způsobech dobývání kamenného uhlí – Eduard Hořovský, 1876</span
            >
            <a
              href="https://ndk.cz/view/uuid:914ef780-77bd-11df-8141-000d606f5dc6?page=uuid:5b84e3c4-2e41-4d74-a896-fbea38898400"
              target="_blank"
              rel="noopener noreferrer"
              >Německo-česko-ruský hornický a hutnický slovník – Eduard
              Hořovský, 1890</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Orlovská harenda')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Orlovská harenda')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Orlovská harenda</h4>
          </button>

          <div v-show="toggeledList.includes('Orlovská harenda')">
                        <span
            >PLAČEK, Vilém (ed.). Orlová 1223-1973: historie a současnost města.
              Ostrava: Profil, 1973. </span
            >
            <a
              href="https://www.archives.cz/web/soka/karvina/projekt/resources/karvina/Namesti_v_Orlove.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >Článek Zemského archivu v Opavě.</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Kino Vlast')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Kino Vlast')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Kino Vlast</h4>
          </button>

          <div v-show="toggeledList.includes('Kino Vlast')">
                        <span
                        >PLAČEK, Vilém (ed.). Orlová 1223-1973: historie a současnost města.
              Ostrava: Profil, 1973. </span
                        >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Jáma a kolonie Mühsam')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Jáma a kolonie Mühsam')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Jáma a kolonie Mühsam</h4>
          </button>

          <div v-show="toggeledList.includes('Jáma a kolonie Mühsam')">
            <span
            >KOLEKTIV. Uhelné hornictví v ostravsko-karvinském revíru. [s.l.]:
              Anagram, 2003. ISBN 80-7342-016-3. S. 226.
            </span
            >
            <a
              href="https://podzemi.solvayovylomy.cz/histhor/lokality/okr/64.htm"
              target="_blank"
              rel="noopener noreferrer"
            >Dějiny dobývání uhlí v Ostravsko-karvinské pánvi - Důl Mühsam</a
            >
            <a
              href="https://www.mesto-orlova.cz/cz/mesto/vzpominkove-dedictvi/38557-jak-se-ilo-v-muhsamu.html"
              target="_blank"
              rel="noopener noreferrer"
            >Jak se žilo v Muhsamu</a
            >
            <a
              href="https://www.zdarbuh.cz/reviry/okd/jama-muhsam-muhsamschacht-v-orlove/"
              target="_blank"
              rel="noopener noreferrer"
            >Jáma Mühsam (Mühsamschacht) v Orlové</a
            >
          </div>
        </li>

        <li>
          <button @click="toggleLinks('Ateliér Sławiński')">
            <fa
              :icon="[
                'fas',
                toggeledList.includes('Ateliér Sławiński')
                  ? 'caret-down'
                  : 'caret-right',
              ]"
            />
            <h4>Ateliér Sławiński</h4>
          </button>

          <div v-show="toggeledList.includes('Ateliér Sławiński')">
            <span
            >PILAŘ, Vladimír a ŠRÁMEK, František. Umění houslařů.
              2. vyd., upravené. Praha: Panton, 1989.
            </span
            >
            <a
              href="https://www.muzeumct.cz/images/casopis-tesinsko/digiarchiv_pdf/Tesinsko_2004_4.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >Tři generace houslařů Slawinských z Orlové</a
            >
          </div>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      toggeledList: [],
    }
  },
  created() {
    if (this.$route.query.s) {
      this.toggeledList.push(this.$route.query.s)
      window.scrollTo(0, document.body.scrollHeight)
    }
  },
  methods: {
    toggleLinks(divName) {
      const index = this.toggeledList.indexOf(divName)
      if (index === -1) this.toggeledList.push(divName)
      else this.toggeledList.splice(index, 1)
    },
  },
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

.sources
  h2
    margin-left: 1em
    font-size: 1.3rem
  ol, ul
    margin-left: .5em
  li > div
    margin: 5px auto 5px 1em
    display: grid
    a
      margin: 4px 0
  h4
    display: initial
    font-size: 1rem
    margin: 7.5px auto
  button
    cursor: pointer
    border: 0
    background-color: transparent
    display: flex
    align-items: center
  svg
    margin: 0 .5em
</style>
