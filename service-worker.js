/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4ff62286691b71061219b6a70cb26998"
  },
  {
    "url": "404/index.html",
    "revision": "4ff62286691b71061219b6a70cb26998"
  },
  {
    "url": "assets/css/0.styles.4248f4d5.css",
    "revision": "f51e6993ca6521236ab67178c204016f"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "b18f4035da78722f55c14babfd2d695a"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "b79e52d4f701028e91f3ff744e982784"
  },
  {
    "url": "assets/data/index.json",
    "revision": "5174a8150f6fc0aa170cf60f8fef4ef6"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "3acf232b6ebd6961021de1bf272a47ce"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "a9b5ed4c0117409108ebbcf39899e92a"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "599c847e7fe6e1fc1c28fd957eac1924"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "38b560ba46028b32fcd493f597a36423"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "8c53737d3ec3eec72242e6f09367d901"
  },
  {
    "url": "assets/js/app.7b6dd0af.js",
    "revision": "c1c2baa5b343de50021afe3df077c422"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.c232ae35.js",
    "revision": "c3d6beb8e4d1c632d6102a4d2ea22d9d"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.1241387e.js",
    "revision": "aa56cb991c92884a3e32cc500b988d02"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.e0f433c4.js",
    "revision": "41a328b9131a6e9d42e78c446be03b0b"
  },
  {
    "url": "assets/static/esp32.07cc2b7.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "fc64c073f99911c612e5d242de2fe9f5"
  },
  {
    "url": "assets/static/esp32.81b85c1.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "833256b16ac3ac032715f620bf324875"
  },
  {
    "url": "assets/static/esp32.a67b0b2.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "c5a74fc2753b61a993aad809c053e2e9"
  },
  {
    "url": "assets/static/favicon.1539b60.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7e3c420ed3359221ac22eedbc5cc1630"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "2f85c47cd65b86c6507ff18b2b8d5e98"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "fa38503a9bbe98901bd244b830e4d6c5"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "6b22178d5429b8ac29e5ced482659f49"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "540320e5aa9702b00a08f9e00d7a921e"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "a8710ab24cde9ded477cd08f602f7349"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7e2074d4885eacfb8d44276b74beac92"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "94b22eed0bfc12ff09d62a86659c4fab"
  },
  {
    "url": "assets/static/website-icon.png",
    "revision": "505e281bcd369ecc424748ac6e8b6369"
  },
  {
    "url": "garden/index.html",
    "revision": "aed3ae5a56008a5ddfe6ae416beeb493"
  },
  {
    "url": "index.html",
    "revision": "aef34860455828478783e778f7e5261c"
  },
  {
    "url": "kitchen/index.html",
    "revision": "6df0e4682ef98e99de20e2a78ee0315e"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "07ea4eae92c504057f4235beec647822"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "e5859a3ff48187846aee6fb6733066a0"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "8c61859827e93312ecb5190e7e802e6e"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "24643e7bfb7ae63b11594e03df180ed6"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "tag/Temperature",
    "revision": "87dc1f4fbcea18257f5b6f16a387aef6"
  },
  {
    "url": "tag/Humidity",
    "revision": "1f756d6572c2f9a962114629cd4ac1eb"
  },
  {
    "url": "tag/Altitude",
    "revision": "7f3ea71b1bf36c086397d84f28eb78a3"
  },
  {
    "url": "garden",
    "revision": "5c4bb96b75c4a24cdd2909e0a5d9951c"
  },
  {
    "url": "kitchen",
    "revision": "00d96ba4a29deb50d190184bcb516747"
  },
  {
    "url": "office",
    "revision": "ed147028263968140ce030738a5f490b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})