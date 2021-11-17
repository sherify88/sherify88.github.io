'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "012bfe14b6dbeccab9ec085465c22c09",
"index.html": "c19229d880d491dc0ce9744543dc215c",
"/": "c19229d880d491dc0ce9744543dc215c",
"main.dart.js": "6ba17100196c48ce0f6dfbb4636be9ca",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "75f1d1e8d9ea845ea993dbb41863107e",
".git/config": "637e60f35ec3194bd0bdafd551c89aac",
".git/objects/59/8034fd4868fb3cd17cf82c12353afac025a8a6": "80fb6e0c28b5b6a480ae554694ec6691",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/21b44488334dc2da42173bbe570d830f1d1560": "7aa64c944f846701f7ca1d33e8db37ae",
".git/objects/3c/a8038ba47558a21c61142f15e957cacb4addf8": "2a418dd084e1393a3a05d0e1ab00cfef",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/a4/5e8ed2911cb2fe7fc6279bac1ff5313155c9c5": "5538ed4285841874600700caa1da673b",
".git/objects/d9/9aa8e7d86fcc113fa077c72a29e6f798c0b3cd": "209cfa894282a02a688e0d34f4f85f92",
".git/objects/b4/3a0516d6f6a82f62397021a696ac8b8c858684": "9135a7e54dd8d3586e3a4e4f523ada6d",
".git/objects/a2/d20eafdf47800ff454c2efac017d2314dd68b9": "7208cf41f2c381420fda7153056d0162",
".git/objects/d6/c21ace80cb0b3fd4ed359de40fc55acb42df21": "9aecb3429eaf8507e8694fbb1cfd2192",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/afd094db411af05442a3ac25605b40573ac409": "2c55b4c6e8cf9a2f4874016d0d06b8a7",
".git/objects/fc/9aedc9a88ff80bf051bd7da47ae479d6061477": "14d6404d229e7f3c21047b1ca2e8412d",
".git/objects/cf/ef60eb0fe7014bba6a2b60016f842c553dc147": "f42aba4c242d3d4227c58f2bfd2b1dba",
".git/objects/fe/4a67b4b68ffd712c132e32122d76694fc24bee": "83e115bfdea3e773c2f3a5722668bab9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/5de6bbd9093e8c0fdd3bcfa955b0bdef7c25b3": "6052832c6ade61cc7fe115c2aa224929",
".git/objects/11/7b90d995659f0957f911c62cf0f391742a3ac6": "7bcd364c0813b4097a410f78ae7c3812",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c5645936d7481f5f5c84cf496ddc13f2172cce": "71b002fd4c442bbcbc1750f080e34074",
".git/objects/4d/68ff3475c03c6a10339d129922c035fa78d2a5": "a6e3c4d5605dd8c4af3382d0a72cc165",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f4d40f3514ebdb30548f32bd45ca63edbea8b5": "55e1f7cead853cc8a755a19c0c5fb7b9",
".git/objects/07/8214d4b0ee49fcd0405fb9df6d6cfe53cf242d": "b687063168c82505f74dfd4b7965af97",
".git/objects/07/0b607355bc56be6b6854bd3633a6c5880aeb07": "935012365424cf6fc823431440775133",
".git/objects/6e/148ba75768bf74b81a80184c7bb1c911c54aec": "9886e1c28d5499f703079d7421bd6825",
".git/objects/53/6cdd379f5dfe19c3635e834ee3c34c1c1c454e": "382b67e51da7d48ecb1a2be806592f37",
".git/objects/a9/47887e9e6c8c1c0a11b0f4afecf4673570ac79": "2adcecc180017102f64f965f576efeea",
".git/objects/d2/c4b15e384f6147f648c02fe7e1493388f6d488": "cda1d6eceb2e61e03bde60b56c62c098",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/3db0ee12528fe6b027096fa53ff93f994b9b23": "3d1a7967074d93dcd78b50eddf68e515",
".git/objects/fa/b3a213d17a42ccac18b9f90f8bdb7043591a46": "79a71565b04e63759e772e6c3719f51b",
".git/objects/ff/094ecbcdb75f1173a8f3176ff262213c1ef98a": "496d12e2a15999995de6422f8c72e942",
".git/objects/c2/111bda50d68c9d32632e6de3f9333511f47ce1": "e1cd1ad089c6b3057e5f8b0e0a449b35",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1e/8c4753659dadc38065ab285b1b5c77b52dcc1b": "7586e1489d66c672a41841725c72eef6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7951f16706a95e8cc0699d4cfaece03f",
".git/logs/refs/heads/main": "fb89cc19a1e3c25ba727dd559fadcacc",
".git/logs/refs/remotes/origin/main": "33fdf3b8c5d2334efb43baa5e7488d76",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1ec1acc466ef9b319e69b40e0e1e363e",
".git/refs/remotes/origin/main": "1ec1acc466ef9b319e69b40e0e1e363e",
".git/index": "09fa33ac7cbf28e25c1a67f7d310a698",
".git/COMMIT_EDITMSG": "a2bc78b25e3a5bc1fd077643abb865be",
"assets/AssetManifest.json": "ab4f7427a363d2876aa25e3473eca8af",
"assets/NOTICES": "9fd80ca1d5a1736baaa654d62559a5aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/reserved_point.png": "b61d0ee6c5a85fa7ee01cab867ea1a62",
"assets/assets/images/english_flag.png": "b015d31c08a32886633b0b87cdb882d0",
"assets/assets/images/money_vector.png": "65de818f3b4262dd78827a3e94de99a0",
"assets/assets/images/warehouse_icon.png": "4dca7c5311ee1a9bd34e220edd4d5e7f",
"assets/assets/images/logo.png": "6ef39a71c50805cc974509d449c13d96",
"assets/assets/images/green_marker.png": "588786428f414218930b53b84c8c9587",
"assets/assets/images/survey_marker_blue.png": "50a60d0b6239e52985937e76034bc83c",
"assets/assets/images/gold.png": "0c46416777a233bf3eed2e99d9683e7f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
