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
    "revision": "4b307f0338731502d3c65ce31625a2ab"
  },
  {
    "url": "404/index.html",
    "revision": "4b307f0338731502d3c65ce31625a2ab"
  },
  {
    "url": "assets/css/styles.styles.199a7602.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "3ec7460bfe0176836ab28b9d8373202e"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "017b10fe6fba89931efa17236ef3d83e"
  },
  {
    "url": "assets/data/index.json",
    "revision": "dd6e978cafc103155e2fb35c48ba955f"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "1f9af485a35310e31ee3732a262153af"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "bc4e0baac22a8178f5f1f1abd1749dd4"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "2a207b76bb933c5ecbbdd6598b54b0e6"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "ec708f71bd3b7720ab290b2fa6b85296"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "f1fc34a313f631912d80e72650d5f396"
  },
  {
    "url": "assets/js/app.0a5fd5f7.js",
    "revision": "d1b0d82998c4d54be3790e8af5b0bf14"
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
    "revision": "a790deab51b5fe7d3202694eccef79e8"
  },
  {
    "url": "index.html",
    "revision": "9848a6b844a7241ba9b5ae6e937c0871"
  },
  {
    "url": "kitchen/index.html",
    "revision": "af64c91bb55f1299c94c7eca302e8b58"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "cf0821cc51cb1273458cdd1de9e09765"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "9e47432bd5835606acb4a64f94066b9a"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "1289336b4ae57a8bed1c0cbf589f5712"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "6956b1c1b315ff1c5ca4fafda799bdcc"
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