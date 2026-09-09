import { clientsClaim } from 'workbox-core'
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching'
import { registerRoute, NavigationRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'
import { targetCache } from './assets/js/tilesCache.js'

// Updating
self.addEventListener('message', (e) => {
  if (!e.data) {
    return
  }

  switch (e.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break
    default:
      break
  }
})

clientsClaim()

// Precaching
precacheAndRoute(self.__WB_MANIFEST)

// Routing
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')))

// OSM tiles - cache-first, scoped only to tile requests so it never shadows
// workbox's hash-based precache/invalidation for the app shell.
registerRoute(
  ({ url }) => url.hostname.endsWith('tile.openstreetmap.org'),
  new CacheFirst({ cacheName: 'OSM_TILES' })
)

// Warm the OSM_TILES cache with a fixed set of base tiles so a first-time
// offline visit still has map coverage before CacheFirst has a chance to
// populate the cache lazily from real map usage.
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('OSM_TILES').then(function (cache) {
      return cache.addAll(targetCache)
    })
  )
})
