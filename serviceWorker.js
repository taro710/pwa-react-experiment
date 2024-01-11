const cacheName = "cache:v1";

self.addEventListener("install", (event) => {
  console.log("ServiceWorker install:", event);
});

self.addEventListener("activate", (event) => {
  console.log("ServiceWorker activate:", event);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(networkFallingBackToCache(event.request));
});

const networkFallingBackToCache = async (request) => {
  const cache = await caches.open(cacheName);
  try {
    if (["GET", "HEAD"].includes(request.method)) {
      const response = await fetch(request);
      await cache.put(request, response.clone());
      return response;
    }
  } catch (err) {
    console.error(err);
    return cache.match(request);
  }
};
