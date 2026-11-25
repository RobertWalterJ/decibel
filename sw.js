const OWN = 'decibel-v3';
const SHELL = ['./', './index.html', './icon.svg', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(OWN).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith('decibel-') && k !== OWN).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;

  // Google Fonts: serve from our cache, refresh in the background.
  if (FONT_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.open(OWN).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  if (url.pathname.endsWith('manifest.webmanifest')) return; // network only, never cached

  // Navigations and same-origin files: network first, cache fallback.
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(OWN).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.open(OWN).then(c => c.match(req).then(r => r || (req.mode === 'navigate' ? c.match('./index.html') : undefined))))
  );
});
