'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1609d3a6d634f8fe866c2c7e0af2b13a",
".git/config": "8dfd89fbacc290760082a36aae447713",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "840e562230b23268a65ba28bc3516cc7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6688176ebbd23a765f1365c26da7e878",
".git/logs/refs/heads/master": "6688176ebbd23a765f1365c26da7e878",
".git/logs/refs/remotes/origin/master": "ecd2469187345ff28e753dd10197ae1d",
".git/objects/00/5225bf3418e9236dffe25385f0761251addf61": "1de80adacd28838c64ea537f28c0376c",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/3b02a420ddeaf0f44a2cb5a581ca3c92ea7e1d": "3e48ea305a912a0e3c60d4e5a14ebbc2",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/04/0638403c921ffa99dce6975951db4eecbc5a7d": "a0fdd3aaa03d200b8fffeb60a93a8d01",
".git/objects/04/090bb141a86b1fc10699f8b98681260250a98a": "a7037767c2b06f5dfaf76d343a3d0f00",
".git/objects/0c/e917fa7966fbf05b7b02e90d9ecd120c437b08": "e916a11dc9cb368d2872d3a2ca807615",
".git/objects/0d/4928ce348cda0786251bfb0d0c9e835b19187e": "350f65b76f9b5260ce6f047174224d99",
".git/objects/1b/9d5f3daebc8e74b7840e2ed0fbf1b02a930bae": "4e9ac5cd18a805b838a4bc7882dbebcc",
".git/objects/1c/7a7d4b1cbcfa9679339a153a253add71232e1b": "b81c1904ce207d13a4a9ad958fdc2de6",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/20/f631f028883c2918e9c163f5cad8e628c3a10f": "7ba4e1db66c862fe6cbe5a431a997146",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/f31707a34a8d493ea246a2b6452383111317d5": "a619a232bdbc9273bf3b3a6b3cf337ef",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/45/76dd0c3c437cb1f90692b38cef902052ba113b": "03de55c8f56a53548e359de436848c62",
".git/objects/46/373db31ced20e503ba4c4e52735de67a717005": "195244cbd96944d20ba76cd2fb8d9ce3",
".git/objects/49/ed6597ec1367ce56db9ee2e3080cd937dc8c65": "724d0778cd99c36a9c2f170d6cc83acb",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/54/76b9ceb1f7435d34a02b659be57132994deeca": "d7cedb04c072c8ba9bca11e2d49ac7e8",
".git/objects/5f/93d23265803e5f926be26a89b0c60cac5370a0": "d0934c4e565087065998ab6981c1ad96",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/7a/a56b1f20f5fa08d416aaa6eb3fc25c15ed08d8": "f881f680205fdf6d1444b47b50195225",
".git/objects/7c/e1c25f91a3ec25d07dc2d0781aec477cb24608": "f89ae2f8411d166cc1512e689677c3c7",
".git/objects/81/adb1d3d0dc284c8530440dd01d3bf38af18600": "77f10ad82472f3bab51a2844b7755262",
".git/objects/82/3744d31f2fe3d3c2bc8a594600420166ea59df": "162deafb2108864b5541a60c7efabc88",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/96/340edd9cc1b75f392fb2c0281e87dc8ebb5561": "26ccde199d30932583f4a52c6d3455f2",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/d6be2f15c44f7591e7ff07dbcf39af17a59bdb": "be964751b684bc78f7ed813170cafdf3",
".git/objects/9f/095a466b7187b50c0071e8d4943dc072fe9c26": "676a9754c865e123b0c1d2bfc7106751",
".git/objects/9f/9a02166f5b3e597c84d9d5763ad5daf69ee596": "7a6a8e2fb87fa0373e21ddea4bcdccea",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a5/8980de99311eb71e91e8c17220173d47fa3a4f": "14c89ec52f1a2dd185c92156e59c8a7b",
".git/objects/a7/21a7fb7aa664c0bc9b12790b8e7566dbaedbf1": "f16a6f70bd2eb9f8ef69f5a52c26417e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/6b3c9238d6c6c64fd719508455bed6e0a1a9a6": "a6657ede1df952e87f1499380a1e01ab",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b2/3ff4e9d15a77fe84ffe490199ffb0b13e786f1": "88f860e58c6fcb721cf91636e7edf1ac",
".git/objects/b3/15cb3c7e24555957bce27dc11c49202f5f5221": "50f4f940e226044349323ca478f10913",
".git/objects/b6/7617d6cbeae2495d94732f7f7bc70095be9528": "f4946bed559e9efd72ad465ac30094ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c5/d5b3a7b1b75bf7a28dc3e81f758bb6d762b8bb": "0353111d0dca790a60f91386588d1d85",
".git/objects/c9/8372d882804fa08c282e760aee59d7f952fb1b": "e9151f50e2857cccc6b26a9344649392",
".git/objects/cf/e66c120e772823ae5aad6a1f18aa2238fcd203": "67291296f92de2a75ed829c0bb5889ac",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/f5d7d5051fcebac7643dc9704c3ebb231e515b": "693af2cd7296d039f48e9b388c4efcda",
".git/objects/eb/795a928ddaf2e0f63c5b245fac6398e49b7b18": "6f05817541d0ecfec720cba88c934bf4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ee/560b9115f75cf985c9fd809d6d48e40c58e57f": "973e5492f116424f5285ddb5a6c7793d",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f3/6afc69d6c5bbdbcb550d21ab747b6509aa58f5": "972aca40da23de02de78408c95992390",
".git/objects/f4/e4d2274bc304500ba299af123373b18789e05a": "c50162ee3914d432365f6eb960ec5b86",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/fb/dccda0b0ca97a9b1c233d5d75956c013b02b56": "716fc41d80be8ecec87c6bee3a19805a",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "bb89f47d6290221b9e1b46f8d7ce1336",
".git/refs/remotes/origin/master": "bb89f47d6290221b9e1b46f8d7ce1336",
"assets/AssetManifest.bin": "f6c66398774292b709a9bafc20a0298a",
"assets/AssetManifest.json": "b6a23a1b1a912a6f2e781e6b7346c507",
"assets/assets/icons/android_studio.svg": "201f408f0c4ca49e0a321bfb80014998",
"assets/assets/icons/attention.svg": "d05ef5435e917ff7bcd3930f50d9434a",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/clickup.svg": "9a22f490d38a261504b953007b8b7cf1",
"assets/assets/icons/collaborate.svg": "a5feff0249a90282d5c816f241a461b1",
"assets/assets/icons/communication.svg": "ec67bd809ba0dbe7b624e4f3d8890f9b",
"assets/assets/icons/customer_focus.svg": "7907e5ee3ffe63f91e5fa4680a05fd64",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/gitlab.svg": "9de2a37b721f158d3f94b934bc3a1c6a",
"assets/assets/icons/google-play.svg": "49bedb2b10ae00922d196cc8e90ed4cd",
"assets/assets/icons/jira.svg": "66d49bde516b50fc82257a9be411d1b2",
"assets/assets/icons/learn.svg": "9b4e8e78dbe3eeec28def1b392286229",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/icons/vscode.svg": "22a4f46ec506bfc4d5d318b02198921c",
"assets/assets/icons/xcode.svg": "fdf392fc8ed140e075b5c7f9eeb40315",
"assets/assets/images/crypto.png": "63cf20cd2e6f65d56e379199bfe29569",
"assets/assets/images/frame.png": "323664b905bd6696f5b2e1f74d125577",
"assets/assets/images/glade.png": "d83eee4162f5c85c7c467ad5154f635c",
"assets/assets/images/image.png": "06cfdbf73cef8c381a6caf4e415b8b78",
"assets/assets/images/preview.png": "d00e7ed1e58786c465887f12a29e5765",
"assets/assets/images/profile.png": "6e6d7c6a593f08c7e7d13f39b10a454c",
"assets/assets/images/sdg.png": "ecf76e3c1be2ef6519f8ee1ee8c6f13d",
"assets/assets/images/storri.png": "3eac78fc2648d3d30c266566ad90ef1f",
"assets/assets/images/triange_icon.png": "23735b2e6e54ab3c087383ac1169c051",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2dea70979bb3f44c90386feacb5ecd0a",
"assets/NOTICES": "252035c83165a59edc9f5e186e5f57f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4ef9893efa01cfda3949bb8a030ea494",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "22c9c3b5487909af3468e3b550d4af81",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0af50d6080b2b7dc1becf975b448e87",
"/": "f0af50d6080b2b7dc1becf975b448e87",
"main.dart.js": "9c2fdf8d8b168867f564994c4ddfd630",
"manifest.json": "a1fdc84d71755211c343897c4f96750e",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
