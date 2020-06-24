const CACHE_NAME = "travel-kit-app-1.0.0.0";
var urlsToCache = [
  "/",
  "/index.html",
  "/src/components/nav-menu.html",
  "/src/components/pages/home.html",
  "/src/components/container/list.js",
  "/src/components/items/home-item/intro-item.js",
  "/src/components/items/home-item/menu-item.js",
  "/src/components/footer.js",
  "/src/components/nav.js",
  "/src/css/materialize.min.css",
  "/src/css/styles.css",
  "/src/css/components/home.css",
  "/src/css/components/navbar.css",
  "/src/data/data-app.js",
  "/src/fonts/leaguespartan-bold.woff",
  "/src/images/HOME-BG.png",
  "/src/images/HOME-BG-2.png",
  "/src/images/logo-fix.png",
  "/src/images/logo.png",
  "/src/js/views/materialize.min.js",
  "/src/js/views/view.js",
  "/src/js/main.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }

        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url
        );
        return fetch(event.request);
      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
