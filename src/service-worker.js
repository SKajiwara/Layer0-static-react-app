// Reference: https://github.com/layer0-docs/static-react-example/blob/a1915cb89011e41447349552a317feb98922955e/src/service-worker.js

import { skipWaiting, clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { Prefetcher } from '@layer0/prefetch/sw'

skipWaiting()
clientsClaim()
precacheAndRoute(self.__WB_MANIFEST || [])

new Prefetcher().route()