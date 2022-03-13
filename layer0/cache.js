
// Reference: https://github.com/layer0-docs/static-react-example/tree/a1915cb89011e41447349552a317feb98922955e/layer0
export const API_CACHE_HANDLER = ({ removeUpstreamResponseHeader, cache, proxy }) => {
    removeUpstreamResponseHeader('cache-control')
    cache({
        browser: {
            maxAgeSeconds: 0,
            serviceWorkerSeconds: 60 * 60 * 24,
        },
        edge: {
            maxAgeSeconds: 60 * 60 * 24 * 365 * 10,
            staleWhileRevalidateSeconds: 60 * 60 * 24,
        },
    })
    proxy('api')
}