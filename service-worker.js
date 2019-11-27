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
    "revision": "3ab852a60ffc4a5e080210210c8b9ca5"
  },
  {
    "url": "404/index.html",
    "revision": "3ab852a60ffc4a5e080210210c8b9ca5"
  },
  {
    "url": "assets/css/0.styles.11d87edf.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "3c00e88b97b27bfa29da521b94b42436"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "411e3be8c4f839b9384c7d3b591f6f2d"
  },
  {
    "url": "assets/data/index.json",
    "revision": "c0fc85a47a6d2ea8bb95f121b1cf350d"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "64ba9105938cbe86d97f13419c174bc3"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "6b8cd6e2c023a794c806f65b6d5f2ad2"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "68e94c32b40013eb10eefbe64974c049"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "2e2bfccd55301f5cb322dd5f4aac5b0f"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "136122e371523eb7404ba192b88199b0"
  },
  {
    "url": "assets/js/app.ac2f5074.js",
    "revision": "9cb84ea71ee91a229fa4fa3a2d6235ea"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.7dc98b5e.js",
    "revision": "9619f9eff037e57b6c58aa61383f576b"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.392dfc66.js",
    "revision": "0b3925e555d7edbeab61569e3a4dd25e"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.109009be.js",
    "revision": "ce04a211300d6415b3a35045179f3431"
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
    "revision": "8a6cd6e4e91a3dd22b1fb8913588ad0b"
  },
  {
    "url": "index.html",
    "revision": "3d61b172bce7bb24a0435287bc09102f"
  },
  {
    "url": "kitchen/index.html",
    "revision": "c97211a77912eb30e49ed2d9cd5a4a4a"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "90a9710f3c9373a2db6a1bc52fb819c2"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "c1b14502b5ea7c99daee149ee2052c72"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "a783915d4c57798eb0fe4ed6908392da"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "bcf2dc81edd701c22d16f098f40d94a2"
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