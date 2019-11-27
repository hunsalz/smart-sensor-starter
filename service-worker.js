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
    "revision": "af59eff22b8fd3d65a1ec76b27098b3b"
  },
  {
    "url": "404/index.html",
    "revision": "af59eff22b8fd3d65a1ec76b27098b3b"
  },
  {
    "url": "assets/css/styles.styles.199a7602.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "8702a5a0eaaeb6830c8a1c87eff1b36c"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "4a5d70f55960a57f65bd015795345e7d"
  },
  {
    "url": "assets/data/index.json",
    "revision": "0792ccd8666e55b30e93160fd8464d6f"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "ba9c610c66cccaafda83c88627dc78d7"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "8d93a59a02ee029ad07815af33579cb3"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "aacfe6bfd474e7f3168bace680de2d4e"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "a75e6d682d5aac58e5dde1a3e3346e91"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "c8dd1444c2099bc47397e60ee555f469"
  },
  {
    "url": "assets/js/app.2b8066ca.js",
    "revision": "94582c3cebf1640e2723021a9bc71d03"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.405e6217.js",
    "revision": "798d5a2a58be5febe684b998fa748b6b"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.d457eb29.js",
    "revision": "0ba46076365d1dab478e339f07b301a1"
  },
  {
    "url": "assets/js/page--src--pages--index-vue~page--src--templates--tag-vue.16d238b0.js",
    "revision": "f2ea6e30846002233fd9fc5d175dde99"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.742af043.js",
    "revision": "8f103ada2fbfe8d2026d394d37dd8a50"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.db974ac5.js",
    "revision": "fd88955b1bc91616bd6331ff9f608726"
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
    "revision": "d35ae9a91e08c6b2d53dc5f0867bce06"
  },
  {
    "url": "index.html",
    "revision": "2dff0fd7b6ac4a6f6d1498c76893d454"
  },
  {
    "url": "kitchen/index.html",
    "revision": "5f9a3fb533ae4f79664ec4f78dbc9b01"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "7c9a2bb4594767275417d9a3c0d6d420"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "d04d7fe4195e231fb00d81b1af8b8751"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "5db54c335201e502b800e3c4e7435c95"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "94bd0361ab4018853db4bb35f7d42ab7"
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
    "url": "office",
    "revision": "ed147028263968140ce030738a5f490b"
  },
  {
    "url": "kitchen",
    "revision": "00d96ba4a29deb50d190184bcb516747"
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