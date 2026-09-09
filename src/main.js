import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMapMarkerAlt,
  faTimes,
  faEnvelope,
  faGlobe,
  faChevronDown,
  faCaretRight,
  faCaretDown,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createGtag } from 'vue-gtag'
import VueViewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

let id
switch (window.location.hostname) {
  case 'zapomenuta-orlova.netlify.app':
    id = 'G-P4CNPTGRMQ'
    break
  case 'zapomenutaorlova.muor.cz':
    id = 'G-1BM9VV7LGZ'
    break
}

library.add(
  faMapMarkerAlt,
  faTimes,
  faEnvelope,
  faGithub,
  faFacebookF,
  faGlobe,
  faChevronDown,
  faCaretRight,
  faCaretDown,
  faExternalLinkAlt
)

import 'leaflet/dist/leaflet.css'

const app = createApp(App)

app.use(router)
app.use(
  createGtag({
    tagId: id,
    initMode: 'manual',
  })
)
app.use(VueViewer)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
