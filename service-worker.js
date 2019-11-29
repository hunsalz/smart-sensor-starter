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
    "revision": "388aa2281e9c3b913d2b766e0c24af15"
  },
  {
    "url": "404/index.html",
    "revision": "388aa2281e9c3b913d2b766e0c24af15"
  },
  {
    "url": "assets/css/0.styles.378d53fe.css",
    "revision": "54fd3e8e06f7881e3b14cb8c2c91cd1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "7caa8c4d2a5da07060c3dcf580945885"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "e8231bf698d7f0cf992ece069d4ed408"
  },
  {
    "url": "assets/data/index.json",
    "revision": "d34396629b47c437aa2d565f7beb3b2b"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "69dee8c8bbe2936051faa23efd47bf08"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "c7c6e1ba0e0c2c7e27fa74f3e256922c"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "1235e0415194c4f7511a2ee07789aa95"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "eec88eb316a601640141288092ce5f48"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "b1aa13eae1af20f7d241f671bbe17090"
  },
  {
    "url": "assets/js/app.276a0c9b.js",
    "revision": "b83cac61e70017a2cc61a5798e306c5f"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.abb88954.js",
    "revision": "200b9d428eab7ade8d80e10ee02741d3"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.e9017884.js",
    "revision": "b6b4bc5e317f9f25f93711bbeca497f0"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.3af6c91a.js",
    "revision": "14cfb43150e87fe07af29fbf977655b9"
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
    "revision": "6bffb51d4d2e30bce530fe13a5054883"
  },
  {
    "url": "index.html",
    "revision": "9814869fc2075a40f31052e4bda6c768"
  },
  {
    "url": "kitchen/index.html",
    "revision": "22df3b599fac7dadb390b4ddf034b72e"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "45efa9ecd60776fcc17581421e68cb24"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "5d543512d2391de846ff805c66fc4ca0"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "3a44d014b777779ee8d29f55d0aff6c5"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "0d5198213ef01d53f0a1af244f30680a"
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