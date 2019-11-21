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
    "revision": "bf3f3438b4eadfa2cb6bb4436944727b"
  },
  {
    "url": "404/index.html",
    "revision": "bf3f3438b4eadfa2cb6bb4436944727b"
  },
  {
    "url": "assets/css/0.styles.1bb9407f.css",
    "revision": "72824d66353d48def87348b9d85f8db2"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "5eaec3eafe62217d425be73e8a759f7d"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "55e8c7b20dc1483439de0c2381a8f9ac"
  },
  {
    "url": "assets/data/index.json",
    "revision": "f25c7694ccb5b264d23bec62fc6d6760"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "37419cc975c1abb4664f5bb560604d6f"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "0b19a8af87e75dcfed7daf03b55ac207"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "0646474ce8207242b516576ac50d99e9"
  },
  {
    "url": "assets/js/app.8190622b.js",
    "revision": "8b2f296b2e383f6cd933c5b39cfeffdf"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.7a9ce589.js",
    "revision": "12e066b169462ac21015856e649ba491"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.2126cfb8.js",
    "revision": "8d42614041e0bd3c579b1f68f832e78f"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.3b2a9907.js",
    "revision": "466f824ed25f5a7a1a8c3588f71485fc"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.e61f8133.js",
    "revision": "0d508186664d28dd266e136dd1748262"
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
    "revision": "2fc0686c6889c1c212d629a574b1436b"
  },
  {
    "url": "index.html",
    "revision": "c837e67f5e481918f25afa843a10ba99"
  },
  {
    "url": "kitchen/index.html",
    "revision": "c536bcc27034a2c0aeabf31d9ba673b2"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "8738f580a360ffec3e796ab74b9d30fc"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "38fbb8d5d90cdf04c279f64737787a35"
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
    "url": "garden",
    "revision": "5c4bb96b75c4a24cdd2909e0a5d9951c"
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