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
    "revision": "344dc16993472ffd4bc529df4a595b5c"
  },
  {
    "url": "404/index.html",
    "revision": "344dc16993472ffd4bc529df4a595b5c"
  },
  {
    "url": "assets/css/styles.styles.199a7602.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "6d03f2116a73eec6910334f1a6ef6ff2"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "9d2432df251dd2ade3cf98cf32eb5b22"
  },
  {
    "url": "assets/data/index.json",
    "revision": "5c238de01b94fb05b257fb6c2bd576e7"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "c33d3f3b032ee5d8f8bde5f9d3d6ae07"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "f03d532c8d2840acb39223ded97b3adc"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "8c41bec41cfbc213d96c13872bfdf99c"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "35954e83064a596bbb0f65fb3b1f8a88"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "ef3e39b3d89ea93f72e5ff882b98857a"
  },
  {
    "url": "assets/js/app.e0291786.js",
    "revision": "4e059bd957d4474c80af03a03450b105"
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
    "url": "assets/js/page--src--pages--index-vue~page--src--templates--tag-vue.ba17a1c2.js",
    "revision": "e9905227e60c8682efc46ec7ddf83376"
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
    "revision": "6556f79bf17f1895326fd993b73a3eef"
  },
  {
    "url": "index.html",
    "revision": "6efef6d2a386f3dbcdd7064ad4758ad6"
  },
  {
    "url": "kitchen/index.html",
    "revision": "85617acb6b78bfef1b83858cd6fd44b0"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "deefa0949273bf23ce8707d031e90848"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "2354daa6b92f866a28fc42fd20407095"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "eb058de001e31cf7fa1376d5ab68fc5e"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "b1f18816ae601db8b6ee645a653e5764"
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