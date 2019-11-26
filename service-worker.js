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
    "revision": "e750e2d6d3e78e9cc0cbc92832f810b2"
  },
  {
    "url": "404/index.html",
    "revision": "e750e2d6d3e78e9cc0cbc92832f810b2"
  },
  {
    "url": "assets/css/0.styles.11d87edf.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "e031f4807bf91b1093784a4b4f0d1120"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "66bfedde44fe1eddaad06a257590e5fc"
  },
  {
    "url": "assets/data/index.json",
    "revision": "515a2a0791f46741e010a5a531427cd4"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "40d62fab53fb4430e1b18dbc5cfc578b"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "14d9aea8d67086ba4d2433ab9bfbda4b"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "8c41360ce90a7b95c6f3bec3df559e45"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "a12850c22a338c9f6c0d60f7d3cc68eb"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "e8f8c28d62799173a706c43c43f978f3"
  },
  {
    "url": "assets/js/app.6e6e78a6.js",
    "revision": "da70d9bea8cb191f78815efb25d99409"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.736d881e.js",
    "revision": "0f04ee29818e1f4c0fd4b60cad70ed04"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.e04929ba.js",
    "revision": "05fa79c2b3b83a627b1a3df9293b9b3a"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.1491cfa9.js",
    "revision": "96a473da9e2cdce1832d5bc2464f366b"
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
    "revision": "47f85a6e7640ed0932295b402f2dc425"
  },
  {
    "url": "index.html",
    "revision": "0f7dd9a37c197597b681d78767a5122e"
  },
  {
    "url": "kitchen/index.html",
    "revision": "f0fc54f7f70c26308c47f53d90d24ff6"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "f211954a28288c599de16178d6744718"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "2bb7e29038a078500d9ec32c6547b5f3"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "2ccd5c617d2a79a8d61f8b36f524091d"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "0c9d58e59a7466a907c737856248dd05"
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
    "url": "kitchen",
    "revision": "00d96ba4a29deb50d190184bcb516747"
  },
  {
    "url": "office",
    "revision": "ed147028263968140ce030738a5f490b"
  },
  {
    "url": "garden",
    "revision": "5c4bb96b75c4a24cdd2909e0a5d9951c"
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