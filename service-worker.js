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
    "revision": "faf81184549a27788d9c969a43840c46"
  },
  {
    "url": "404/index.html",
    "revision": "faf81184549a27788d9c969a43840c46"
  },
  {
    "url": "assets/css/0.styles.5b01a8b0.css",
    "revision": "67a375dd9bcd7459fe9eff155aa26d01"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "e639e8b63222437d04b33b7c2843b02a"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "af25bc653f08e43ffacb65e8dad58c4c"
  },
  {
    "url": "assets/data/index.json",
    "revision": "3e1c06db2644b02d5590ac269441fc20"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "b9ba228892eff2e33de7789833b591d1"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "1c1fc55480c6ee98feab50f8d32ff2c0"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "238eab92c6344474c4ec208800065980"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "c5d2d6450efa5d2a37c750e5b155def4"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "26265ed61cbdaceda15691a687da19fa"
  },
  {
    "url": "assets/js/app.d4b07024.js",
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
    "revision": "728ae5008c019a308e622b59731f038e"
  },
  {
    "url": "index.html",
    "revision": "cbab0bfd2f2dbeefa9dc4f1e9de1879c"
  },
  {
    "url": "kitchen/index.html",
    "revision": "55a6a55becfb3531175f81e9ff2f7fdd"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "5522568a1fc246cddd1e2ac65aba80ea"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "9eb782fe2f6883d8e151ecc1efb462eb"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "72a78561dfc2c83538e545123f4285b8"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "eb6852e4b4ccc28ef4c6e5038aeb3b64"
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