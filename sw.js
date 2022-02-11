// -src https://web.dev/offline-cookbook/

//sets what gets cache'd
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/master.css",
                "./images/arrow.png",
                "./images/logo192.png",                
                "./images/apple-touch-icon.png",
                "./images/120.png",
                "./images/180.png",
                "./images/android-launchericon-512-512.png",
                "./images/android-launchericon-192-192.png",
                "./images/android-launchericon-144-144.png",
                "./images/android-launchericon-96-96.png",
                "./images/android-launchericon-72-72.png",
                "./images/android-launchericon-48-48.png",
                "./spa/js/views/dashboard.js",
                "./spa/js/index.js",
                "./spa/js/views/AbstractView.js",
                "./src/index.js"])
        })
    );
    
});

/*
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
}); */
//was having error with the service worker not displaying the script content offline, this is Network falling back to cache method

self.addEventListener('fetch', function(event) {
    event.respondWith(async function() {
       try{
         var res = await fetch(event.request);
         var cache = await caches.open('static');
         cache.put(event.request.url, res.clone());
         return res;
       }
       catch(error){
         return caches.match(event.request);
        }
      }());
  });