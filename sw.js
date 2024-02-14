const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
  "/",
  "index.html",
  "styles/main.css",
  "scripts/main.js",
  "app.js",
  "https://kit.fontawesome.com/06a427721a.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
  "favorite-false.png",
  "favorite-true.png",
];

//Install service worker
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

//activate event and remove old cache
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", function (event) {
  //console.log("fetch event", event);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      //console.log(response);
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
