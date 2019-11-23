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
    "revision": "021c2e121a241a38b4b386fab8511872"
  },
  {
    "url": "404/index.html",
    "revision": "021c2e121a241a38b4b386fab8511872"
  },
  {
    "url": "assets/css/0.styles.11d87edf.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "31d4c104994cd395d5dc363d165c207d"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "a2c2279c771f6151b56f857a079d6fc4"
  },
  {
    "url": "assets/data/index.json",
    "revision": "a3b4d01f6edb3a61b5fce380615ebe55"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "8876d759af6cc5d1f416baf6b0c3f9fe"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "809cb663904ebe4285dcdb84a194f18b"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "81e62df823e177adbd100a3e0faf5cbd"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "e5d475a2cc2605cc17c3b97d2ad3601d"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "3517058524735c3395d3b66a839f81e4"
  },
  {
    "url": "assets/js/app.909bb5a0.js",
    "revision": "c24617a2965fe17b7fe45b2addbd25ee"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.32ea849c.js",
    "revision": "6ccc68dabe6010bf87d358fd53b8e122"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.0150faa5.js",
    "revision": "676f41d27acb70c5f585d1291f4d2a36"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.ffd70161.js",
    "revision": "846f978f2ebc55ca60289a81c29f16df"
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
    "revision": "c8c51889e4faec35cc20226f8c49a085"
  },
  {
    "url": "index.html",
    "revision": "fb19f0d2105042345a8cdd4137def007"
  },
  {
    "url": "kitchen/index.html",
    "revision": "c35cac9405944392b13b5f3cd22e3c2d"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "b0f0047aa4e10baa779ca15a267c41dc"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "e1b0ae2c48bf732feacd527766fbde77"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "40bb5981dfd93671ea2f0fe04014b11c"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "89c78c1f5541695c82a8f719a3a983e3"
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