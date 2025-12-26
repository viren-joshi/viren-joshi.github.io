'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "cdd7b6de66d47df944e98f0c37c346fe",
"assets/AssetManifest.bin": "5eec1bfb469c5ce96944611d1572fe9e",
"assets/AssetManifest.bin.json": "c72e4c6a854e78ed731e42916561953c",
"assets/AssetManifest.json": "870740768e0ffcf19f99295f08206bc4",
"assets/assets/android-light.png": "bca607a472c4d910487c7443e9c0d324",
"assets/assets/android.png": "7ab6eb527d38591d656cf1449dec3e1c",
"assets/assets/automated-question-dark.png": "a78968c25094c61835c3831a11bb2da6",
"assets/assets/automated-question.png": "ac8c70a75fab5db4a8d9837b1a8a406b",
"assets/assets/aws-api-gateway.png": "243e352228f5d84649090d965d9c844c",
"assets/assets/aws-cloudwatch.png": "aaf374c08c876bb1ee58471842db8040",
"assets/assets/aws-cognito.png": "30631d0e1560f7d97e57da8f5fae62f0",
"assets/assets/aws-dynamo-db.png": "5a20d830c3b60ffe8c6f78a0ad538644",
"assets/assets/aws-ec2.png": "1fe3dfe29e35a7b56cd0fdc5aebf95de",
"assets/assets/aws-lambda.png": "0f9814ee8dd1d4412ea6a40b73020d44",
"assets/assets/aws-rds.png": "1ce0c7cde8ef5cc80bbdc815b1ce3ddb",
"assets/assets/aws-s3.png": "1c8e5dcc236f176ed42b7a9fe445844c",
"assets/assets/aws-sagemaker.png": "3a1f0b5f5c7a0156dfae61b4fca15e07",
"assets/assets/aws-sns.png": "dfb5f8134662d0d59136e3157aa7a663",
"assets/assets/aws-sqs.png": "6d82962c27c8a401a1f21650c2a37727",
"assets/assets/aws-step-function.png": "7426264e062e6bc80587d740a026de84",
"assets/assets/aws.png": "eb29e910f79ad054bde0be1c3ca3659c",
"assets/assets/axios.png": "cc9d14a162d2af17faa4e1c3237c0ae3",
"assets/assets/bettercap.png": "e8587ffaba875379c3d099047c80861d",
"assets/assets/bloc-icon.png": "0fe2ee29c202aabb62f57c353414799c",
"assets/assets/bootstrap.png": "a97ae29f2826121795fca047faec7738",
"assets/assets/burp-suite.png": "be9fc0d8b3b0722afe31104a8423f33c",
"assets/assets/c.png": "cf895d025fc1817f74f12590d4a7b3ee",
"assets/assets/ci-cd-icon.png": "b1b01bdcd99b8e1a2638d17d3bf80f22",
"assets/assets/cloud-foundations.png": "7fd8dee27b25c29a196b5d4a7b4be935",
"assets/assets/cloudformation.png": "0286280685722b0b20c5a742b41135e2",
"assets/assets/coding.png": "6e650df8b13e300340272e72dbe7f89a",
"assets/assets/communication.png": "6624e9dae5d8f271964775c1b87ac607",
"assets/assets/computer-network-certificate.jpeg": "b15a89acbde7d1a12a03117005805f8e",
"assets/assets/computer-vision.png": "62379fafbf6cfc556e854767afdc090c",
"assets/assets/cpp.png": "56d7c7893b192fbed017ddc1c1858555",
"assets/assets/css.png": "fd1536c10ee423823b2e4da492b8d808",
"assets/assets/dart-light.png": "3aabf5b40daf1200c8fb241348300c85",
"assets/assets/dart.png": "a5615f82cb04a19274a7e40077f9a063",
"assets/assets/data-structures.png": "f31841ff0e923314a39394216518ca45",
"assets/assets/deep-learning.png": "bc85e3575ea3d4a1717b50728534baf9",
"assets/assets/digital-ocean.png": "07e07a361d7ef148a6bba1191dce0565",
"assets/assets/django.png": "f91ac273fa5cd78f5fc77eac092cc82f",
"assets/assets/docker-mark-blue.png": "5c52f7fb9b471662f8b00586df713879",
"assets/assets/docuflow-icon.png": "0a22564c65d6b457a286dd44361c83b9",
"assets/assets/e-commerce.png": "0e4d6de1d4e87096b46a0079ecef438e",
"assets/assets/ethical-hacking-certificate-udemy.jpg": "1a0c481096c921737936b1ac21ab887e",
"assets/assets/event-management.png": "94077491db50ba8062bc80381b67d8cb",
"assets/assets/fcm-icon.png": "2343be595ef35971913da82c903aa85c",
"assets/assets/firebase-icon.png": "7275e5aff2528b84b7e29aa7f9afd72d",
"assets/assets/firestore.png": "f530683b929bb5b1da309e2537d57739",
"assets/assets/flask-dark.png": "d8c2a2b6d5e6a2a5d3aaa82105e3879a",
"assets/assets/flask.png": "a7cc8d9f06c269611e0add0182ab0bcb",
"assets/assets/flutter-certificate-udemy.jpg": "91bbbf0ee5059f403b5bd5c408f13720",
"assets/assets/flutter-icon.png": "4f1f5e645f6179db70125a17e1cb96fd",
"assets/assets/flutter-light.png": "9a9d9688ba95a68dcc71514b04402260",
"assets/assets/gcp.png": "1db26e4f36150800eb71dd4af01ed52a",
"assets/assets/get-x.png": "591858eacf40e277a4b8353a75622442",
"assets/assets/git-icon.png": "40b891859556b444d28c2e51ce41f0af",
"assets/assets/github-dark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/github-logo-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/gitlab-icon.png": "1ce31406a8f392cb3713160499921323",
"assets/assets/google-cyber-certificate.png": "be14cd016de4e30b145e59e11b2b1a73",
"assets/assets/google-icon.png": "da5e7d99dd4e8d0bf7bcdb9bfc09674a",
"assets/assets/html.png": "d5fa9d5e5842905c670040d0692e03af",
"assets/assets/industrial-safety-dark.png": "0cf803587ca875136d22722c07f2abef",
"assets/assets/injection-dark.png": "904781cda12889f9af3a0c1ba23ae083",
"assets/assets/injection.png": "89343d0efa13d93595966fb29fbb2102",
"assets/assets/jacoco-icon.png": "0b9c2a2d177426c914ea4900332151db",
"assets/assets/java-dark.png": "26a229a2e1dd07341d6133573fe32e85",
"assets/assets/java.png": "87bf78cfdc807bd9f13b34999a21b520",
"assets/assets/javascript.png": "ff9030bf9cb8ee741cfd937d3040a01e",
"assets/assets/jetpack-compose.png": "86956c654230c96f1b0e68f028e187ef",
"assets/assets/junit-icon.png": "815e990dca4e13d715704f4768b0cd0e",
"assets/assets/kali-linux.png": "4a83218f86cbb42bc89bf009d198b8a0",
"assets/assets/kotlin-dark.png": "e5d7f7b211b9dc0fcfdb90e4286bb88b",
"assets/assets/kotlin-light.png": "966d2ff0529a17431e05491539cdd003",
"assets/assets/kubernetes.png": "ddd8dde2120df92a2be43e913d750211",
"assets/assets/linked-in-blue.png": "f6b73c5e3d4da176b6ab718c866e2073",
"assets/assets/linked-in.png": "be412f381242395e693b2cd5881c150e",
"assets/assets/linkedin.png": "a0ef71fee0a848929125e725ef73f33e",
"assets/assets/linux-dark.png": "6487258b168747a49c732db1a47a140b",
"assets/assets/malware-minder.png": "019a7fb72fbacd717bb115d6b8a6b5e2",
"assets/assets/meta-icon.png": "5d020dcc41164d3a26708dc24b17c52d",
"assets/assets/metasploit.png": "db1ec0d57372fc66de15140f1c5f76af",
"assets/assets/momentreely.png": "d5a8e245024055882480b161c5e61535",
"assets/assets/mongodb-icon.png": "36ffda1a0321d6fdff7cff97e855b755",
"assets/assets/mysql.png": "89c6575ea5e58f7d280dba69ea5105d9",
"assets/assets/mysqlworkbench.png": "66fbb3b634cadda39e307051e59eb4ee",
"assets/assets/nci-icon.png": "faacabafabb37fb1829757fd200d56bc",
"assets/assets/nirbhaya.png": "d66c5def29ac67060d1dc597614177ca",
"assets/assets/nmap.png": "16b209bca1d7f86194428433b1b55e1d",
"assets/assets/numpy.png": "670e758224391362294ab8b05fd16358",
"assets/assets/opencv.png": "310034e29ee0de15a0b8a0c89486a280",
"assets/assets/pandas.png": "a0ee8e6a6fb14e43de6fa5a5637cf6f3",
"assets/assets/param-linter.png": "aabc6aab0f5559cbf35b1253e7058384",
"assets/assets/php-dark.png": "fca5b3daaf9e10339f9e8b604c87acc1",
"assets/assets/php-light.png": "1465e07f8150bf2a39b60dd76193a89e",
"assets/assets/phpmyadmin-icon.png": "a01588c6eaa6d4e6ba74f6b02b0b36e9",
"assets/assets/pinecone-icon.png": "0cdebf4cb75cf38a14f3083d91e646d3",
"assets/assets/plant-disease-image.png": "1b87ede0c8620111b75b70e3e3a3e8b5",
"assets/assets/plant.png": "c0e09c394a8e1fb94bb19d91dd8c92ff",
"assets/assets/postgresql-icon.png": "9980ef3bf90f560bd362ed81fd1f3ca1",
"assets/assets/pulumi.png": "9958da01a6faf0abcb3c031fe6db32f6",
"assets/assets/py-torch.png": "fdd37fe33b19424f292c6dec3546b4b2",
"assets/assets/python-light.png": "1e85770759af8f28648eae04850f57e6",
"assets/assets/python.png": "ac5fce58fe47ad0821392b80c029ca2c",
"assets/assets/react-flow.png": "a48936bdac5c92ffc783acce6bef1b29",
"assets/assets/react.png": "37457ca63c96fb1fbde01f78ad9def7f",
"assets/assets/realtime-database.png": "c87ed28968bc7947df0747f4d1f43e1d",
"assets/assets/resumate-icon.png": "07839f69f4d1f43451db8161ae64d77b",
"assets/assets/retrofit.png": "f832d3eba74c209a1f9a326996636cfb",
"assets/assets/safety-dark.png": "e7f511042029a16c6e6ab5c6d2f2c501",
"assets/assets/safety.png": "8526a7fca25bd8e9884c404fa3e73bf9",
"assets/assets/selenium.png": "0c5d19292e8cd24c82dfa1ac433d06cc",
"assets/assets/soft-viz-light.png": "13bdee0812f17fd2bac0386c011ce1ae",
"assets/assets/soft-viz.png": "636fc4cb09f973df342b796abe07bf9a",
"assets/assets/springboot.png": "cb3e28986f4d644d65e4749276ee038c",
"assets/assets/sql-map.png": "f0fa8de39610e1cada793542fddc941a",
"assets/assets/student-faculty-interaction-dark.png": "184567c0cc1cbaacc9328e3d23cf93aa",
"assets/assets/student-faculty-interaction.png": "97f844fb9d00fb77a65d22fa029baa1d",
"assets/assets/terraform-icon.png": "b30bab4dc8d38383fecc0cbda8d3f184",
"assets/assets/ubuntu.png": "01832471a878610be0dfa6a403e673b9",
"assets/assets/vite.png": "29b55b08aebfa5fc622a5072d9cb7d66",
"assets/assets/VJ.png": "d02808ed696792b64f20f31f1f0d9d5a",
"assets/assets/vois-certificate.png": "40e2afaef5baf12c1f1b8d3343815c93",
"assets/assets/volley-library.png": "0eeaeb553da4e825505c2c0b63d23879",
"assets/assets/yolo.png": "afc8c9eef490109698a32a8d28e09e2c",
"assets/data/portfolio_data.json": "6dd0e01edbbad586144cd5efc3c96118",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eb70dc02a6b88ab558046b3aace8b9f8",
"assets/NOTICES": "1a3cc587741b8089342745326a89c6cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon_io/android-chrome-192x192.png": "56cde12a1edbec0666fc9e5d6cdeef3d",
"favicon_io/android-chrome-512x512.png": "da6e0323bf6a165850365856c1ab2d0b",
"favicon_io/apple-touch-icon.png": "cd7c612e2cd328798d451ede9e08eb19",
"favicon_io/favicon-16x16.png": "72e16a07236d661258d9634403869028",
"favicon_io/favicon-32x32.png": "955b5b1fcdda2bb4148e5539fccc750a",
"favicon_io/favicon.ico": "0bb5ad6845de6dd5574379f153a7fa74",
"favicon_io/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "23a792f0e4e8843a08dfcc03dcec8c79",
"icons/android-chrome-192x192.png": "56cde12a1edbec0666fc9e5d6cdeef3d",
"icons/android-chrome-512x512.png": "da6e0323bf6a165850365856c1ab2d0b",
"icons/apple-touch-icon.png": "cd7c612e2cd328798d451ede9e08eb19",
"icons/favicon-16x16.png": "72e16a07236d661258d9634403869028",
"icons/favicon-32x32.png": "955b5b1fcdda2bb4148e5539fccc750a",
"icons/favicon.ico": "0bb5ad6845de6dd5574379f153a7fa74",
"index.html": "f5858b1840f7c51d94bfc9bd9d609851",
"/": "f5858b1840f7c51d94bfc9bd9d609851",
"main.dart.js": "7048d7093a9fa2a9ff66162c6f62515d",
"manifest.json": "2d4852864b6cbf0cd93f13a4caef48b1",
"version.json": "009c9e65172e010890f7f65fde438006",
"vj-logo.png": "56cde12a1edbec0666fc9e5d6cdeef3d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
