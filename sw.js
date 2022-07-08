//JS file for the PWA Service Workers
// -src https://web.dev/offline-cookbook/

//sets what gets cache'd
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/master.css",
                "./images/arrow.png",
                "./images/home.png",
                "./images/back.png",                
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
                "./src/index.js",
                "./spa/js/index.js",
                "./spa/js/views/dashboard.js",                
                "./spa/js/views/AbstractView.js",
                // cache upholstery
                "./spa/js/views/upholstery.js",
                "./spa/js/views/upholstery-adhesives.js",
                "./spa/js/views/upholstery-bleach.js",
                "./spa/js/views/upholstery-compound.js",
                "./spa/js/views/upholstery-curry.js",
                "./spa/js/views/upholstery-polish.js",
                "./spa/js/views/upholstery-inks.js",
                "./spa/js/views/upholstery-oils.js",
                "./spa/js/views/upholstery-organic.js",
                "./spa/js/views/upholstery-paint.js",
                "./spa/js/views/upholstery-ph.js",                
                "./spa/js/views/upholstery-synthetic.js",
                "./spa/js/views/upholstery-soils.js",
                "./spa/js/views/upholstery-urine.js",
                //end cache upholstery
                //cache carpet
                "./spa/js/views/carpet.js",
                "./spa/js/views/carpet-adhesives.js",
                "./spa/js/views/carpet-bleach.js",
                "./spa/js/views/carpet-clay.js",
                "./spa/js/views/carpet-compound.js",
                "./spa/js/views/carpet-curry.js",
                "./spa/js/views/carpet-filtration.js",
                "./spa/js/views/carpet-furniture.js",
                "./spa/js/views/carpet-inks.js",
                "./spa/js/views/carpet-oil.js",
                "./spa/js/views/carpet-organic.js",
                "./spa/js/views/carpet-paint.js",
                "./spa/js/views/carpet-ph.js",
                "./spa/js/views/carpet-polish.js",
                "./spa/js/views/carpet-protein.js",
                "./spa/js/views/carpet-rust.js",
                "./spa/js/views/carpet-salt.js",
                "./spa/js/views/carpet-synthetic.js",
                "./spa/js/views/carpet-toner.js",
                "./spa/js/views/carpet-urine.js",

                //end cache upholstery
                //cache hard surface
                "./spa/js/views/hard-surface.js",
                "./spa/js/views/hard-surface-adhesives.js",
                "./spa/js/views/hard-surface-curry.js",
                "./spa/js/views/hard-surface-dye.js",
                "./spa/js/views/hard-surface-efflorescence.js",
                "./spa/js/views/hard-surface-etching.js",
                "./spa/js/views/hard-surface-oils.js",
                "./spa/js/views/hard-surface-organic.js",
                "./spa/js/views/hard-surface-rust.js",
                "./spa/js/views/hard-surface-scum.js",              
                
                //end cache hard surface
            ])
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