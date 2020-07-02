const CACHE_NAME = "travel-kit-app-v1";
var urlsToCache = [
  "/",
  "/index.html",

  "/src/components/nav-menu.html",
  "/src/components/nav.js",
  "/src/components/footer.js",

  "/src/components/container/list.js",

  "/src/components/pages/home.html",
  "/src/components/pages/travel-kit.html",
  "/src/components/pages/destination.html",
  "/src/components/pages/tips.html",

  "/src/components/items/home-item/intro-item.js",
  "/src/components/items/home-item/menu-item.js",
  "/src/components/items/travel-item/kit-intro.js",
  "/src/components/items/travel-item/list-item.js",
  "/src/components/items/destination-item/destination-item.js",
  "/src/components/items/destination-item/season-item.js",
  "/src/components/items/tips-item/tips-item.js",

  "/src/css/materialize.min.css",
  "/src/css/styles.css",

  "/src/css/components/home.css",
  "/src/css/components/navbar.css",
  "/src/css/components/travel-kit.css",
  "/src/css/components/destination.css",
  "/src/css/components/tips.css",

  "/src/data/home.js",
  "/src/data/travel-kit.js",
  "/src/data/destination.js",
  "/src/data/tips.js",

  "/src/fonts/leaguespartan-bold.woff",
  "/src/fonts/GlacialIndifference-Regular.otf",
  "/src/fonts/Playlist Script.otf",

  "/src/images/home/home-header.png",
  "/src/images/home/home-feature-bg.png",
  "/src/images/travel-kit/travel-kit-banner.png",
  "/src/images/travel-kit/travel-kit-item-01.png",
  "/src/images/travel-kit/travel-kit-item-02.png",
  "/src/images/travel-kit/travel-kit-item-03.png",
  "/src/images/destination/autumn.jpg",
  "/src/images/destination/bangkok.jpg",
  "/src/images/destination/british.jpg",
  "/src/images/destination/dubai.jpg",
  "/src/images/destination/france.jpg",
  "/src/images/destination/galway.jpg",
  "/src/images/destination/portlans.jpg",
  "/src/images/destination/spring.jpg",
  "/src/images/destination/summer.jpeg",
  "/src/images/destination/winter.jpg",
  "/src/images/tips/01-reading-book.png",
  "/src/images/tips/02-studying.png",
  "/src/images/tips/03-money.png",
  "/src/images/tips/04-carry-insurance.png",
  "/src/images/tips/05-gmaps.png",

  "/src/images/logo.png",

  "/src/js/views/materialize.min.js",
  "/src/js/views/view.js",
  "/src/js/main.js",
  "/src/js/sw.js"
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
