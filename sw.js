const CACHE_NAME = 'document-scanner-v7';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
// 跨網域靜態資源白名單：只快取這些網址（cache-first），其他跨網域請求一律不攔截
const CDN_ASSETS = ['https://cdn.jsdelivr.net/npm/@techstark/opencv-js@4.9.0-release.1/dist/opencv.js'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);                       // 必要：失敗則安裝失敗
    // OpenCV 約 10 MB：預先快取，但失敗（例如網路不穩）不應讓安裝失敗，之後第一次載入時會補快取
    await Promise.allSettled(CDN_ASSETS.map(url => cache.add(new Request(url, {mode: 'cors'}))));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const hit = await cache.match(request, {ignoreVary: true});
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone()).catch(error => console.warn('Unable to cache asset:', error));
  return response;
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone()).catch(error => console.warn('Unable to cache app resource:', error));
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (request.mode === 'navigate') return (await caches.match('./index.html')) || Response.error();
    return Response.error();
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (CDN_ASSETS.includes(url.href)) event.respondWith(cacheFirst(request));
  else if (url.origin === self.location.origin) event.respondWith(networkFirst(request));
});
