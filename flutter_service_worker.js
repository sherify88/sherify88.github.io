'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "012bfe14b6dbeccab9ec085465c22c09",
"index.html": "c931c7555e70900968b1dec4c912c654",
"/": "c931c7555e70900968b1dec4c912c654",
"main.dart.js": "21c8135474491358550629fdc343778e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "75f1d1e8d9ea845ea993dbb41863107e",
".git/config": "637e60f35ec3194bd0bdafd551c89aac",
".git/objects/59/8034fd4868fb3cd17cf82c12353afac025a8a6": "80fb6e0c28b5b6a480ae554694ec6691",
".git/objects/92/9c1977568ac126ea81e6d2a667e1e53209d6ee": "77216a54b7992623b2317bb1236915ff",
".git/objects/0c/d1d5244f9c773f56993567a358063089f2d34e": "134bff5ef75f5bf1ccbc9ea61e253271",
".git/objects/50/3a57edea12627b334c4fec9e5d0def9500cdde": "be838d08bef852fd0423b627a134ed48",
".git/objects/9e/5eaa3a6789370e27bdd8e71950fafaaa2c655e": "fd08f19fdd24deabfbf9bfae34405c4d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/21b44488334dc2da42173bbe570d830f1d1560": "7aa64c944f846701f7ca1d33e8db37ae",
".git/objects/3c/726ba78299a1e8c82fe7f93b1ac40a2b1ae2cf": "16cd22579a20d33e87553e028e0eadbc",
".git/objects/3c/a8038ba47558a21c61142f15e957cacb4addf8": "2a418dd084e1393a3a05d0e1ab00cfef",
".git/objects/94/3ac24d76599551b57ac36c7c6f1958c6639f12": "2bbf21bed8c25305b2411470cb3e04a6",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/5a/e341f8d5b1bea9bb5a3771878fa38ae395ea8a": "a128ea34b1cd9761383a16495e001df9",
".git/objects/05/60573d6080e4345b5e4dc3d82decd31d2c9a36": "5a217dbd76ec374f5a1d49c10441d437",
".git/objects/9d/74fa4edf09bd3c637fda5c9d7c14075e2bd18d": "05e921b0a2c089a5c84b622a05c415fe",
".git/objects/02/992576ff983e4a444dddc9d0a56477b77edc35": "a10c51be3cec716ba9b4b4f563f9ec9d",
".git/objects/a4/5e8ed2911cb2fe7fc6279bac1ff5313155c9c5": "5538ed4285841874600700caa1da673b",
".git/objects/b2/c68a0f8d11b53971d7e4894f5f0a870be61e63": "bdd398d92fcde24c93075742a6d9b23b",
".git/objects/b2/690ca4732e746a53aa36fe2480af83f2642645": "907355cd58ceca4ee2f0213ba44eeb6d",
".git/objects/d9/9aa8e7d86fcc113fa077c72a29e6f798c0b3cd": "209cfa894282a02a688e0d34f4f85f92",
".git/objects/d9/4833e26ae5d5ba8b0b7f0d8cd249054d4c0ab7": "850f3c2cd43a3faae2b8c4c78e6b3f47",
".git/objects/b4/3a0516d6f6a82f62397021a696ac8b8c858684": "9135a7e54dd8d3586e3a4e4f523ada6d",
".git/objects/a2/d20eafdf47800ff454c2efac017d2314dd68b9": "7208cf41f2c381420fda7153056d0162",
".git/objects/d6/c21ace80cb0b3fd4ed359de40fc55acb42df21": "9aecb3429eaf8507e8694fbb1cfd2192",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/afd094db411af05442a3ac25605b40573ac409": "2c55b4c6e8cf9a2f4874016d0d06b8a7",
".git/objects/c7/2869b9bf51c90c4bfa78cea9f9b8dbc9187463": "514467cf300b20f56d7a978cc4a5cfb0",
".git/objects/fc/9aedc9a88ff80bf051bd7da47ae479d6061477": "14d6404d229e7f3c21047b1ca2e8412d",
".git/objects/f5/0bd4b065dc7f03e7fc4fa2ffaadf368619fccf": "fe9906bcfdf46bcc2bb5467cfc977c60",
".git/objects/e3/e449ea697e046e76e66650a50588b06d57b300": "0b287b6dbec1d8b23c392ac58f9c28d5",
".git/objects/cf/ef60eb0fe7014bba6a2b60016f842c553dc147": "f42aba4c242d3d4227c58f2bfd2b1dba",
".git/objects/ca/2f9e4bd30aa2c8cb009b1e5854e6a2149bb1d0": "034eaf8948330ce9f03dd5ca5365ff14",
".git/objects/fe/4a67b4b68ffd712c132e32122d76694fc24bee": "83e115bfdea3e773c2f3a5722668bab9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/5de6bbd9093e8c0fdd3bcfa955b0bdef7c25b3": "6052832c6ade61cc7fe115c2aa224929",
".git/objects/11/7b90d995659f0957f911c62cf0f391742a3ac6": "7bcd364c0813b4097a410f78ae7c3812",
".git/objects/29/bc5d5b96ad3216b256452bcc3d731c37a79484": "f15efaedb1007aa2d53bc166bbea3676",
".git/objects/45/d8bdb1e4655d17781245d55e5c178765972064": "42cb700bd8b4fef2cb3bf169c78952f4",
".git/objects/73/cff556b22655e4bbc630b52811dcee66013705": "38dc54ed6901d4aaa8f5cfa3b5a004c9",
".git/objects/1a/0720216578a7a06c9d4449ca7f8248fe39a720": "dd1edaf068ecf81fb2f17b71279ee0eb",
".git/objects/17/f427ac87f1fc5171a7964f608720cde88994f5": "1075aa8adfbcd6a6d8b7b38dd8b2137f",
".git/objects/8f/b4cbd9f9f5d5bec01e9737ea6065b22b714204": "df6a100abc6090a03b56822027ac4dca",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c5645936d7481f5f5c84cf496ddc13f2172cce": "71b002fd4c442bbcbc1750f080e34074",
".git/objects/19/4874a7c302d0eb7b9a5ee988777a8bfcb94bd2": "abcaaafdd7892e387f522fc28a32c435",
".git/objects/19/f71876dc295dec2f96e6fc6ed208e442d40093": "21a2354d10c8cd1dd9dbea039b4c80ac",
".git/objects/21/4d59af2d6d6b08b3ea3889267a505da6655208": "f0f4ced04966099586a2deec2709fd0b",
".git/objects/4d/68ff3475c03c6a10339d129922c035fa78d2a5": "a6e3c4d5605dd8c4af3382d0a72cc165",
".git/objects/72/676dc55bf518d51de7b2af9f241872b093e89f": "4e813204d9ab124725c18fd5413529c0",
".git/objects/44/b8f9a5ef265a76cd81faae7f5e18365c2b4b1b": "beb042a21d9b6423ca66fe9718230edf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f4d40f3514ebdb30548f32bd45ca63edbea8b5": "55e1f7cead853cc8a755a19c0c5fb7b9",
".git/objects/6b/7a49547333cdcf289399f7e78636967fc14d07": "7f7835d929214893203e9d3fa3bae912",
".git/objects/07/8214d4b0ee49fcd0405fb9df6d6cfe53cf242d": "b687063168c82505f74dfd4b7965af97",
".git/objects/07/0b607355bc56be6b6854bd3633a6c5880aeb07": "935012365424cf6fc823431440775133",
".git/objects/38/627696c43925b9be21dbfef558e493f9f0b7c7": "5a7f5e7d0bcdf3ca95fecf09fd1e9907",
".git/objects/6e/148ba75768bf74b81a80184c7bb1c911c54aec": "9886e1c28d5499f703079d7421bd6825",
".git/objects/65/a835b5941538647625b3f7b3f869deeccd12e4": "24119f072573c8f831b13bf43df09165",
".git/objects/54/747bce96bef7506967f2566c327a5c1b2168dc": "a12a6755919fae8b4f2a8a3807a35e4d",
".git/objects/53/6cdd379f5dfe19c3635e834ee3c34c1c1c454e": "382b67e51da7d48ecb1a2be806592f37",
".git/objects/55/b3be5758306de3385ba3642ac9d43aa3feecf5": "354f796bf59c22cd64973af48768430a",
".git/objects/97/69d74c522a1692768d713b2c30cc37d16161fd": "9460b1b2a0c4c64f5d6c650ea4013652",
".git/objects/a0/e1ee7ba284bbeae90d876b5e95d388924a3ced": "6269a7c4316ca29ce164cb34bce88eba",
".git/objects/dc/ce0afcf45ad58f6334e533300284d06295a8fa": "422aaf829c8ce5486949dea8e887cdc6",
".git/objects/a9/47887e9e6c8c1c0a11b0f4afecf4673570ac79": "2adcecc180017102f64f965f576efeea",
".git/objects/a9/e82e4b43606eeaa8aef6e9ec663aa81fa2f9f6": "f6f29ee029c70c89c0085d3429232803",
".git/objects/a9/038d9236dc20debffcd2875607f5ed0d6f1da6": "fefe112fd6d1b2c3cd55b2c72703fc0c",
".git/objects/d2/c4b15e384f6147f648c02fe7e1493388f6d488": "cda1d6eceb2e61e03bde60b56c62c098",
".git/objects/d2/25c287a3dc5abf8087e770d8f910e5076d35a7": "2a34f16b1c1ecf0ce638b375e97fae8d",
".git/objects/af/2090acc18b5530028da70a6826be2a231347da": "22bc91d1fe531625f4be8cfd1e32184c",
".git/objects/af/d0da1812419a0b8ba8f06576e9d227e28a55dc": "77293a1ffca425ac5ebba3a71f89be09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/b28c48e2ed9f205b6f6d7dc09c7c7b31ef7558": "a7ef7ea4229c894db0977213ce9e364d",
".git/objects/ef/a8b7fd4db1b231b8a6636fbe8df3382ac04c22": "f19893eca5cca0f7a3e3ae8f0448ecd4",
".git/objects/ef/3db0ee12528fe6b027096fa53ff93f994b9b23": "3d1a7967074d93dcd78b50eddf68e515",
".git/objects/e1/9f6ba14b671b460e0cf2fe713687153425f446": "e60599479c095ed6dd1069c4f080aeaa",
".git/objects/e6/8ddd7721b19ee89ce41e6b510be9d22770a679": "9b43c2da480c123ee1578ec29aa9454d",
".git/objects/f7/60964567f5f9320282f1f4c03bc1c9e00ee727": "ca9e42af414aeeb74728579078ce2818",
".git/objects/fa/b0542993c5d9ae89c30c1a88d88e7589816e24": "3428aea3c8e63e64f268cbfa84eaf5bb",
".git/objects/fa/b3a213d17a42ccac18b9f90f8bdb7043591a46": "79a71565b04e63759e772e6c3719f51b",
".git/objects/ff/094ecbcdb75f1173a8f3176ff262213c1ef98a": "496d12e2a15999995de6422f8c72e942",
".git/objects/c2/111bda50d68c9d32632e6de3f9333511f47ce1": "e1cd1ad089c6b3057e5f8b0e0a449b35",
".git/objects/f8/1a8165a1f06e510f60ff7a926a27fa86fb74c5": "55cc75b1d3bec38e3b77252f78d47b2d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/c337f35050bd049de3af116f9330cd1761cbed": "62cf0486e81a75d459b219e3471dc8b7",
".git/objects/1b/1776e985d56c3a8dd7c6009d516c01dfa418be": "d4c27326ed31034f6fdb7c5af21b4742",
".git/objects/1e/8c4753659dadc38065ab285b1b5c77b52dcc1b": "7586e1489d66c672a41841725c72eef6",
".git/objects/12/81583856bdaafbb52cabacc554239ff026afa1": "36bdef7eba7b697f4f76667ef8f38aff",
".git/objects/85/543eedd16d5c20cfc732dac9a5f3a03e97e244": "b66ee78586923bc9ed168729a05c062f",
".git/objects/40/cef897746370a4b3407d2364316e58cc076ca6": "e2cba2b879680906f42db9a4598ee1b5",
".git/objects/25/8c410cc3f16d3ef7cead801dcebebf6b01b787": "639d8e964bf5b4d22f8c2cbfe48ff01e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "513cde6a6fae39f314ef6320239eb9e3",
".git/logs/refs/heads/main": "dc612315d8d4d63810145a9784ad503b",
".git/logs/refs/remotes/origin/main": "5f9f1be959ff51b8062aebc92fcd4f34",
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
".git/refs/heads/main": "36f5524025d08bec38ea97f40078b0d7",
".git/refs/remotes/origin/main": "36f5524025d08bec38ea97f40078b0d7",
".git/index": "4fbb943da8fee8a090477f2ae3ca58db",
".git/COMMIT_EDITMSG": "c47000333a3ed5b3019eb09f3aa1f3c9",
"assets/AssetManifest.json": "2d069b2bb95e784f7393b9a99b113025",
"assets/NOTICES": "d355246635004b9e5b706bc394730865",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/reserved_point.png": "b61d0ee6c5a85fa7ee01cab867ea1a62",
"assets/assets/images/marker_pos_4.png": "3dd08f88c36a5ab41bc3d100b6783629",
"assets/assets/images/marker_pos_16.png": "4c82827a42f47a51c74b1e340c227640",
"assets/assets/images/marker_pos_17.png": "784020b6f1b2a7132f104eb219769bda",
"assets/assets/images/english_flag.png": "b015d31c08a32886633b0b87cdb882d0",
"assets/assets/images/marker_pos_5.png": "0997902c0337197cac13065cb6846d88",
"assets/assets/images/marker_pos_7.png": "2809844781f91fe34e2ac5aa70fe090f",
"assets/assets/images/marker_pos_15.png": "9a313b7bfc6e5af5c29cb90e4ccd3628",
"assets/assets/images/marker_pos_14.png": "66ce60b79b2f46897ae982eccced2b1c",
"assets/assets/images/marker_pos_6.png": "c0abf8d20119ca6e5199425c13b5358b",
"assets/assets/images/marker_pos_2.png": "29965776a9924131e84ca9581786e327",
"assets/assets/images/marker_pos_10.png": "2fc1ec8f348acbd9838ce7b72149157b",
"assets/assets/images/marker_pos_11.png": "4ff01e001c7364c5dcae8192377f3279",
"assets/assets/images/marker_pos_3.png": "98a99d3fabdf6e72d7890fafde467f84",
"assets/assets/images/marker_pos_1.png": "c28efa6a6b4472c66bdacfc87a5f7f59",
"assets/assets/images/money_vector.png": "65de818f3b4262dd78827a3e94de99a0",
"assets/assets/images/marker_pos_13.png": "950931c1017f9f11cdc39bc6f749b7cd",
"assets/assets/images/marker_pos_12.png": "d963dbf17391ad884db70c3240ace301",
"assets/assets/images/warehouse_icon.png": "4dca7c5311ee1a9bd34e220edd4d5e7f",
"assets/assets/images/marker_pos_20.png": "6d404b5bfe2b09159edb469225d247c4",
"assets/assets/images/logo.png": "6ef39a71c50805cc974509d449c13d96",
"assets/assets/images/marker_pos_19.png": "13fa1bcb255e14666a25c2218e5637e9",
"assets/assets/images/marker_pos_18.png": "a584af41e6ed530e3a988914bb1fbad6",
"assets/assets/images/marker_pos_8.png": "53785a36a43a18620fb760c71b675147",
"assets/assets/images/marker_pos_9.png": "091b4b1949a454bfa1c8a02d4a21dd62",
"assets/assets/images/green_marker.png": "588786428f414218930b53b84c8c9587",
"assets/assets/images/survey_marker_blue.png": "50a60d0b6239e52985937e76034bc83c",
"assets/assets/images/marker_for_merchant.png": "37d9f07086e978091ebe58d54017f086",
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
