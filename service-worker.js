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
    "revision": "9be18ee264b9453b4a8da9621dc7544d"
  },
  {
    "url": "404/index.html",
    "revision": "9be18ee264b9453b4a8da9621dc7544d"
  },
  {
    "url": "assets/css/styles.styles.199a7602.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "23c952fc1524eeaf9206c58f930a9225"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "226009de5e37bb3718a2e51d91736f0f"
  },
  {
    "url": "assets/data/index.json",
    "revision": "cde8ba215b4432f61e8bbd56d5ecea18"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "a17fb2e729cbd10bd5e4b447b5aa2879"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "47e7088318a58fcdb5e1bb0c16999947"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "185427ab7a5d4e8cfa5641bacc45b211"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "79abb110c600bb5d825af72fce23484b"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "09a35b7356bd7cdcd8fb97af68647884"
  },
  {
    "url": "assets/js/app.856cc67b.js",
    "revision": "5cde1a5c56a6503831153f07a494732d"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.405e6217.js",
    "revision": "798d5a2a58be5febe684b998fa748b6b"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.0aa67855.js",
    "revision": "5ec3390a7d160fd8ad7a41928cc19616"
  },
  {
    "url": "assets/js/page--src--pages--index-vue~page--src--templates--tag-vue.f16316fb.js",
    "revision": "48d840366443fa30207535e914098908"
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
    "revision": "d9e0f56ee4a8f73e56d3da46fd4214ef"
  },
  {
    "url": "index.html",
    "revision": "3ad839059c2bb86dab5a264fbd96e893"
  },
  {
    "url": "kitchen/index.html",
    "revision": "c29e703b0c7c4b00832ee92f8a508343"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "01ff4b5b260eb1befaa9645c5689ff17"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "78de43b06ee3dc62f31f9cc102fc21ce"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "48b4d51bdcaa2428ccab70ce284060ef"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "5443c40feae5144dfb8d3d640f24f033"
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