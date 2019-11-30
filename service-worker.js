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
    "revision": "160218c1f1b972522f6ba0f8a1428251"
  },
  {
    "url": "404/index.html",
    "revision": "160218c1f1b972522f6ba0f8a1428251"
  },
  {
    "url": "assets/css/0.styles.62b09907.css",
    "revision": "f439a2f479bbb92f3fc99ada95d85e0d"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "f66f93afd07f23aad1538886e4022741"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "5725fe1fe87bee622030bac6a580a975"
  },
  {
    "url": "assets/data/index.json",
    "revision": "af113e34c0ae6c3d7103c3ed93d6ebb4"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "52ae495559fb47b145f65bb2a59fc40f"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "5790ef7255a1662ba26a60526ed9a580"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "fb44321624eeb1a729e768489f9bce59"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "37967057791e1458ab227e74fa83fd26"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "e55aad17663d02d9b1dc08ef5d7e5fca"
  },
  {
    "url": "assets/js/app.696e31e5.js",
    "revision": "e92875e63f7f681a02f6db90d6c5500a"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.99327657.js",
    "revision": "1c5ca3adcda37d439d27a7cc8490faf5"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.4574a9f1.js",
    "revision": "eaf45c19b7d6abba9fbbd5a056160ff7"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.3bb591a9.js",
    "revision": "4224279310ab4190d1f84fa4679ccaeb"
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
    "revision": "c5cc4e1aec84193a24a8eca2e8660c7d"
  },
  {
    "url": "index.html",
    "revision": "526afcd667e55b24b9050b736323145b"
  },
  {
    "url": "kitchen/index.html",
    "revision": "178bc4f0b1c793e6381dfc427e7a1607"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "c603d46a5cea34c53dd6f132d0be0c7f"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "1da2ee8510d19b1f92199d6e1cd3f03c"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "db9106f9a72079382bcdad094ecff935"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "867d02998223a0ee26a61b2aa59a79de"
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