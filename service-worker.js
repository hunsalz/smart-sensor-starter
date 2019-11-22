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
    "revision": "409374738adbcd1363b09f440b8f586a"
  },
  {
    "url": "404/index.html",
    "revision": "409374738adbcd1363b09f440b8f586a"
  },
  {
    "url": "assets/css/0.styles.5b01a8b0.css",
    "revision": "67a375dd9bcd7459fe9eff155aa26d01"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "31da6d0a6a25b799145c83aed4e0cc75"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "aeca54c5d86582f8316e7bb00f2097fb"
  },
  {
    "url": "assets/data/index.json",
    "revision": "781713eb2f5e4ada8c95ff753e0cf5d9"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "95a77d58c4e854e1feabc87ca83bed5a"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "f6a0647601c90f19c302275e8477cd50"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "f87fbc39b71cf260f87c4e838dc2c7fd"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "acf8736e99b5d0a30154d4e7c43151fb"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "2fd459f2f0e1e9cb1f6b4ae13bddef38"
  },
  {
    "url": "assets/js/app.f65c6c12.js",
    "revision": "3693f3f003ee8b95be91d3056abcaf96"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.37d4448e.js",
    "revision": "c53ab05b076e984083c8a957bc750346"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.6e85c9d1.js",
    "revision": "00a741d9f77d6819e684a245ba32e39c"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.62f71c65.js",
    "revision": "f402dd9fdae022f26dd3b4ce13dba556"
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
    "revision": "b6507d9fbdd01d09879bbf6cc591cb69"
  },
  {
    "url": "index.html",
    "revision": "7ae549c880e2b358015b0b92ac2fb8f3"
  },
  {
    "url": "kitchen/index.html",
    "revision": "ba9abaff7a55f205bc6ba258fbaf4a9b"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "0f182615620552a03c2af88ad125e609"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "67abe688df971e5876d988d6b8c3af0e"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "09f3fccb495dee0f6ac2399d5d9bf37c"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "b736b3574e78c81ef7a535a902441ef2"
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