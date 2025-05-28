// service-worker.js
self.addEventListener('install', (e) => {
  // 立即啟用，不等待舊版本
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // 立刻接管目前頁面
  self.clients.claim();
});
