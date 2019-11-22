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
    "revision": "a06fc5f6dbf931ac56c9c3865f314d95"
  },
  {
    "url": "404/index.html",
    "revision": "a06fc5f6dbf931ac56c9c3865f314d95"
  },
  {
    "url": "assets/css/0.styles.1bb9407f.css",
    "revision": "72824d66353d48def87348b9d85f8db2"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "f3f3a5973e18e6e4062ba612cd52cc48"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "e255b38249b3aa1f7895a994b5385fc9"
  },
  {
    "url": "assets/data/index.json",
    "revision": "ea4074a11ba5c1bce7dadca611d1a8ce"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "11dbc01342f29d2bc6293c1dc86184d3"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "31d9fea069106efe06b4428f08fde94b"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "cf67d5a8c940f8a8dcdb2851fe785ace"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "30d59252b26b07a3d334c1f0c948d5d4"
  },
  {
    "url": "assets/js/app.729dd0ce.js",
    "revision": "f291eca63f2be3ae2c8b1ec4da1de39d"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.7a9ce589.js",
    "revision": "12e066b169462ac21015856e649ba491"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.0a8e4509.js",
    "revision": "7b16c131f121d31d2b8a580ef543e80b"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.732badf7.js",
    "revision": "8338c2ab2c367866047b8705c04a50cd"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.1b02d981.js",
    "revision": "90225acbb5c84dc8ca3c95145c0e2fcb"
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
    "revision": "b8a152940a6b9b82e5ad9631b69cbc5d"
  },
  {
    "url": "index.html",
    "revision": "4919b320850c9a916a447aeca04cb17c"
  },
  {
    "url": "kitchen/index.html",
    "revision": "b29e96ed8224d7b17e6fbfdbd36ab014"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "3e503c42b05cb1af3d51a5360adcafc7"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "f5e72697031ee999c2ba64e826c48491"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "3c587ffde75db8e8fb111929917664f3"
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