/* CASSANOVA Clash — service worker (network-first agar selalu versi terbaru) */
const C = "cassanova-clash-v5";

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => c.addAll(["./", "./index.html"]).catch(() => {})));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

/* Network-first: coba jaringan dulu (selalu update), simpan ke cache, fallback ke cache saat offline. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        const cp = resp.clone();
        caches.open(C).then(c => c.put(e.request, cp)).catch(() => {});
        return resp;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});

/* Izinkan halaman memaksa SW baru aktif tanpa menunggu */
self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});
