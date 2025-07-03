const CACHE_NAME = 'pwa-facturas-cache-v1';
const archivosParaCachear = [
    '/',
    '/index.html',
    '/clientes.html',
    '/facturacion.html',
    '/facturas.html',
    '/productos.html',
    '/public/css/style.css',
    '/public/js/app.js',
    '/public/js/service-worker.js',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(archivosParaCachear);
            })
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(event.request);
            })
    );
});