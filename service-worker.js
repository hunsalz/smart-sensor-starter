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
    "revision": "488380c1fb3bb77cac11bc110f1a747e"
  },
  {
    "url": "404/index.html",
    "revision": "488380c1fb3bb77cac11bc110f1a747e"
  },
  {
    "url": "assets/css/0.styles.5b01a8b0.css",
    "revision": "67a375dd9bcd7459fe9eff155aa26d01"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "a6c552177c6caf23091bf8e01e47b75f"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "df8b48db1d1ae9405546f2213671a745"
  },
  {
    "url": "assets/data/index.json",
    "revision": "8182849f37ebc14331e58eb702178a63"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "ab5cbac1a704e4ba2caa3012370bca42"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "b30cae052791bb847d7665a5a3a3a3d7"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "0119b27ba5f1389ba015ac52478b863b"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "e67c9205dcff869dca00ece992fd56cb"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "28f6ac93365d2805c0f01207e1cf6f5a"
  },
  {
    "url": "assets/js/app.8a2ad74a.js",
    "revision": "e2ef2054dc47903ee201d7c1c68a53df"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.74193d29.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.0041aa51.js",
    "revision": "0f04ee29818e1f4c0fd4b60cad70ed04"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.b4d33a72.js",
    "revision": "05fa79c2b3b83a627b1a3df9293b9b3a"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.78b573c6.js",
    "revision": "96a473da9e2cdce1832d5bc2464f366b"
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
    "revision": "d2a802ddb91346ba1bacd54ab5d9aace"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "ff82882c2da0bb17285633973ae6d65b"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "f9974bad556938f2707848d1814f13a1"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "f7be2331ae350e64cd1600af80c3683b"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "466eb6d2639408db8b9b58c037297d53"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "69003266b28a85cbbdb7b0ca7c6757f3"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7cf51ec517585d2700f4feb85597548d"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "9fff9a2ceadee823efa116130802fb9a"
  },
  {
    "url": "assets/static/website-icon.png",
    "revision": "505e281bcd369ecc424748ac6e8b6369"
  },
  {
    "url": "garden/index.html",
    "revision": "a2dd8d4fef02d97302720e5fbaa67948"
  },
  {
    "url": "index.html",
    "revision": "4dc90e7c9da26c6acd99b9c51d509a15"
  },
  {
    "url": "kitchen/index.html",
    "revision": "cc200cf776e0b54378888f480e9c8d6d"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "08afc16edc9dc86f1fc1120a8709a986"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "2a9d519e8befa954906dd3ed5896a432"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "872dbb84c793ce6a633fef642c69b73b"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "c86e773b26299a72d0a9fadebe3441e5"
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