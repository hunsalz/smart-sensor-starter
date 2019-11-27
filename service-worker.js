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
    "revision": "806fb77d594c75647063d515d6e00940"
  },
  {
    "url": "404/index.html",
    "revision": "806fb77d594c75647063d515d6e00940"
  },
  {
    "url": "assets/css/0.styles.378d53fe.css",
    "revision": "54fd3e8e06f7881e3b14cb8c2c91cd1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "5555345b17c0ca1999cf211cd1e718cb"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "c21a2a306d67f5142d1e32ee5bdaf641"
  },
  {
    "url": "assets/data/index.json",
    "revision": "652a21f0533acf39b4b5e9f7249c3f4a"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "8d79a1ddb7fadbb3b08105136d949465"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "bad7f357f08b157f2bec447f3e489188"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "2d870f3d28f59bbe95aa76f27306abc9"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "c096a07c54e5b0d9ae731e8ca16fa259"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "b93d1215416fdadae495b3c97969aaca"
  },
  {
    "url": "assets/js/app.dc856c06.js",
    "revision": "b1e15b28bc81925338b0d281aac88cf7"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.929bb876.js",
    "revision": "c11819474f7e6d9736c7e8b9f1a401c3"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.fa619ee2.js",
    "revision": "b6b4bc5e317f9f25f93711bbeca497f0"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.a2731003.js",
    "revision": "8dc353426674428cfddb3f948e167e16"
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
    "revision": "62358fb6d5c5f4204b33a5564bccdb16"
  },
  {
    "url": "index.html",
    "revision": "0a3af6ae6fde1a8fe371299ad1bda90e"
  },
  {
    "url": "kitchen/index.html",
    "revision": "b051b4e8c7854cd9cf91555be623836b"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "b3b1175ea775d3d9481b1e39b1b60c95"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "ef144a4c228391161f1e4b78480096dd"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "e953d14dfa391ffb0e9f8d8b0944ad73"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "c857799d0d6e27e86344d1ec7aef47d2"
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