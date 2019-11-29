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
    "revision": "e10558e35b5926d9a54b66770294c0ae"
  },
  {
    "url": "404/index.html",
    "revision": "e10558e35b5926d9a54b66770294c0ae"
  },
  {
    "url": "assets/css/0.styles.378d53fe.css",
    "revision": "54fd3e8e06f7881e3b14cb8c2c91cd1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "2c5857dbc56b7ce0a8932ddbbd41ef97"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "6b3ad90205d98af052c6c62cc7f340cf"
  },
  {
    "url": "assets/data/index.json",
    "revision": "2774240785ab458f8a23d96267c9ddd4"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "d4d0f527b6bb6737f7c272f143f252e7"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "a90874e6a66a3a37d487b86482684d1d"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "684f35a76d05b295382bad815724d9cf"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "5bca16195b0f5ad7dd9e86a287c48fd0"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "dbc82703f2740c8e2f3a97ca8f2cb03d"
  },
  {
    "url": "assets/js/app.1d3035ba.js",
    "revision": "f227c8e6f7c938f62d338ba1c993510b"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.d6701ffa.js",
    "revision": "2849ededfdfad89f9cc4e844fc18b039"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.fa619ee2.js",
    "revision": "b6b4bc5e317f9f25f93711bbeca497f0"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.d0e6e713.js",
    "revision": "9f3063b53dc5e0082408e6d0af20a818"
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
    "revision": "0810ad01bf51b9ca7a7a379b20bc4113"
  },
  {
    "url": "index.html",
    "revision": "c3bbeb45f384fa966010f20960d0d9fd"
  },
  {
    "url": "kitchen/index.html",
    "revision": "3d25ec1c0559a523cd0c9448057528cd"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "ed4ec522087957c6a357e1ad3e64617a"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "68444e5601e23935ae1327a847c2b02f"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "611e562b1bc8a7e7e46fc8f17cb499b0"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "56989c32387a436bb39a89ceb9470798"
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