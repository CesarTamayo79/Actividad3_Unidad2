const CACHE_NAME = 'pwa-facturas-cache-v1';
const archivosParaCachear = [
    '/PRY_Examen1/',
    '/PRY_Examen1/index.html',
    '/PRY_Examen1/clientes.html',
    '/PRY_Examen1/facturacion.html',
    '/PRY_Examen1/facturas.html',
    '/PRY_Examen1/productos.html',
    '/PRY_Examen1/public/css/style.css',
    '/PRY_Examen1/public/js/app.js',
    '/PRY_Examen1/public/js/service-worker.js',
    '/PRY_Examen1/manifest.json'
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