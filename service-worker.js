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
    "revision": "311a65c7b24034bc7f52a8c1a80e540c"
  },
  {
    "url": "404/index.html",
    "revision": "311a65c7b24034bc7f52a8c1a80e540c"
  },
  {
    "url": "assets/css/0.styles.378d53fe.css",
    "revision": "54fd3e8e06f7881e3b14cb8c2c91cd1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "b2a5d4a8d16af2e0792c7e3fcfc58112"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "17e8363bb19c1ef6c5dde4db666da120"
  },
  {
    "url": "assets/data/index.json",
    "revision": "8c4720c7ea1a58acc970f7c8c0bf1cda"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "e76354993d3662e09e374b31d8a4f460"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "6aa5db0ad3801b97b157e44aa3fa96ce"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "9c846d9c895fcee7aa760a465c0ba326"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "1f1ea45ac763bb1578c904bd357edffb"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "90a2e8d4748c07541a327029094c8717"
  },
  {
    "url": "assets/js/app.7a678f1d.js",
    "revision": "feb7af399bc2df013cae70dbc68c8ad7"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.425afcf6.js",
    "revision": "a699395a77cf14ad3e1ed6acde4f2a0f"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.e9017884.js",
    "revision": "b6b4bc5e317f9f25f93711bbeca497f0"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.f47c1cc5.js",
    "revision": "4f845f6e68c2d53188777e293692e57a"
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
    "revision": "515fb885e95e96661115f464cf8ba96f"
  },
  {
    "url": "index.html",
    "revision": "475c2df8d04dab767f6d9357e130295e"
  },
  {
    "url": "kitchen/index.html",
    "revision": "79957e5ce414427fcb13657504256ae7"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "d150df762cc06b7a8e8d56ddd5731239"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "10f74f41858622658156e93ff1693302"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "33d3152b08b2506988c65973587f1fb3"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "81151bd651fa462f066a5661fbd9c77a"
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