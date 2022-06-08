'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b064a020db8018f18ff5ae367d01b212",
".git/config": "a78304b234a85459c52eee62b03f0916",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0487113d1a291fdd35c37f832f713d2a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4548e0ab3265c78cf58aa34466e0f34a",
".git/logs/refs/heads/main": "186af62461943092882fd112e1476b53",
".git/logs/refs/remotes/origin/main": "51ef53a06f8800a7b6c56d4458bfe2d2",
".git/objects/05/cdfbeabd00b4e392a8d36e720535b9080ba50f": "6b56d17566a92e46d7b707540d0df7ca",
".git/objects/0c/7f9ec49d8db18e6e6edd936051b27ad1a8eee8": "fb6161bff16e1dba4d7577bd50b12f04",
".git/objects/15/fe783dc3344c07e864959e1c076deb1f85d926": "66da10a35a57d785ee7372beb8c84f11",
".git/objects/2b/3facdc96c93878b451d3e7c9e175640b6d092b": "e4e9a67b3704f33bbe8226b07d12d54e",
".git/objects/4f/c818f2f44b1a7bccf97401b41a44573da2b63e": "a705970c93850c126d016ae210c54938",
".git/objects/54/4360c333b5dc85cf6f6e0ff5331394a9b037ff": "0019c1948b01e2117b77cc833dbe2fd8",
".git/objects/57/22326d1c5808cb8c28e6911e52ee7d0491d4a4": "7606ea2d216a3e4f183a0f00d71555e8",
".git/objects/5d/7e04b74cbae1fb475fe5ba4a05790fdee8a78a": "badcc4958d47d86e0c7728ab3fdce4f2",
".git/objects/6f/10571ecbd425cbe63098903e08e397da47bad5": "84d40810040e49e2ce32f09b59e76fb0",
".git/objects/7d/43d902aeb650ea22dac411f732286cd4f3be0c": "c849fb7328d56babdfcf742645643872",
".git/objects/86/deb528b83b8230025b788032e69380e23bf246": "0f9de7e49e6cc52ecea46f04f459a6c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9e/ee26672e9412a1f31224ad53792106851f5e02": "496c697313766b56a845cd52eeb5d880",
".git/objects/9f/472b279472c504b8c78a3faa3eee86ae90b873": "219d88e58b6fc1e4945640b53a565346",
".git/objects/a3/7904aa5315d7449303a20c278a578326fe86e1": "aa9ae1b1257490205292368b2fd83f8b",
".git/objects/af/664bdb835d11fc53d7327ad30d995aee0d1b0f": "31ae2166f6232ffce3063fb270d736ba",
".git/objects/b0/3bc027fb0afe8b73bac31379c951b7c9676fae": "e5112da5ce82a1cdf9a7d83872f10da1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/69c90bb6cfbdb1f3f03e4b332146fc67c34484": "31be55f08d38ac184d12831a6fe7e2e6",
".git/objects/f4/0b4d53b1d883c3470b53137ebc3ef303724d72": "117a87bc4170510e477a50b1f9df1a47",
".git/objects/f9/4a3bf4f28084b01f0a4c947c27228c7a515b51": "746d8f37006592554453b84fb207dfa5",
".git/refs/heads/main": "bf3ebb13bcde23873c81714826a3075e",
".git/refs/remotes/origin/main": "bf3ebb13bcde23873c81714826a3075e",
"assets/AssetManifest.json": "965ce0ce3492bac8df231ad6ef42964b",
"assets/assets/fonts/OpenSans-Regular.ttf": "58b1f440729d267697bddcddb994bce9",
"assets/assets/images/health_logo.jpg": "2789bbdc182782fbdbec602f572d0c34",
"assets/assets/images/pactilis_logo.png": "5db22accfd81864b8f73a6a3121ef02c",
"assets/assets/images/pdf/health_logo.jpg": "2789bbdc182782fbdbec602f572d0c34",
"assets/assets/images/pdf/pactilis_logo.png": "5db22accfd81864b8f73a6a3121ef02c",
"assets/assets/model.pdf": "a797a94e5ca271a4f69b067c481635cb",
"assets/FontManifest.json": "732a606296fb8df52e6adf9c5c2e3f12",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "743008796452f45f29587e4354f8a229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cb4c18212a1b3ad6b48dcd0fe32c1c8c",
"/": "cb4c18212a1b3ad6b48dcd0fe32c1c8c",
"main.dart.js": "0b1a125ae3a695fca52b01ef9b79f7b4",
"manifest.json": "d1cfdd2d75f5c7a2337063b6aacbc542",
"version.json": "f92533fb4fe59899590e7247a58dfed7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
