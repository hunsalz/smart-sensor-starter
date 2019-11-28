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
    "revision": "c18fc5bf7a2025713f245b31f97b6b89"
  },
  {
    "url": "404/index.html",
    "revision": "c18fc5bf7a2025713f245b31f97b6b89"
  },
  {
    "url": "assets/css/0.styles.378d53fe.css",
    "revision": "54fd3e8e06f7881e3b14cb8c2c91cd1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "7ac6f06cffa7d63a0ff1ec4d30761403"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "c774fc7d415d5176470d33c7f934498a"
  },
  {
    "url": "assets/data/index.json",
    "revision": "3fa5a1c963abea141a0b9db1bdb7b5f3"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "08d9842316204da3d3563171b3c6e291"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "0c3a5a988b9566342cbbca34196e536b"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "f276327f7cdd7aae7c1ee0626d6e95bd"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "cdd7368a6c919744dff1e3db1eb347d9"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "78f466f912b7f28a5688e3933be2b5c9"
  },
  {
    "url": "assets/js/app.4d79f062.js",
    "revision": "df3f43a0c8390d35e81e39b9d8e2b3b9"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.8e9e0b23.js",
    "revision": "7aa4e04d8f5d5fdceba56d9f4aa171bc"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.fa619ee2.js",
    "revision": "b6b4bc5e317f9f25f93711bbeca497f0"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.7bef9e39.js",
    "revision": "07833dc251023d4251c2e31b1b03017d"
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
    "revision": "805f2e76dcf45308d8e06520f3543a6c"
  },
  {
    "url": "index.html",
    "revision": "92738c4e79f77ebb3e967900ce850d6d"
  },
  {
    "url": "kitchen/index.html",
    "revision": "45fa0fcced41a5d97e868b305f3f9954"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "1816efd10a33e096e82b2063eb30b07f"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "09f73a3b4f5e7005b19d4e035a93553d"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "1f2bf2954577f0aa9e42b7347b311cb8"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "ffaec081a47573a02c141558dd97dd1d"
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
    "url": "garden",
    "revision": "5c4bb96b75c4a24cdd2909e0a5d9951c"
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