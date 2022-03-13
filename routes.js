// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'
import { API_CACHE_HANDLER } from './layer0/cache'


const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR
const ONE_YEAR = 365 * ONE_DAY

const edgeOnly = {
  browser: false,
  edge: { maxAgeSeconds: ONE_YEAR },
}

const edgeAndBrowser = {
  browser: { maxAgeSeconds: ONE_YEAR },
  edge: { maxAgeSeconds: ONE_YEAR },
}

export default new Router()
  .prerender([{ path: '/' }])
  // Here is an example where we cache api/* at the edge but prevent caching in the browser
  .match('/api/:path*', API_CACHE_HANDLER)
  .match('/images/:path*', API_CACHE_HANDLER)
  .match('/static/:path*', ({ cache, serveStatic }) => {
    cache(edgeAndBrowser)
    serveStatic('build/static/:path*')
  })
  // all paths that do not have a "." as well as "/"" should serve the app shell (index.html)
  .match('/:path*/:file([^\\.]+|)', ({ cache, appShell }) => {
    cache(edgeOnly)
    appShell('build/index.html')
  })
  // all other paths should be served from the build directory
  .match('/:path*', ({ cache, serveStatic }) => {
    cache(edgeOnly)
    serveStatic('build/:path*')
  })

  // send any unmatched request to origin
  .fallback(({ proxy }) => proxy('origin'))
