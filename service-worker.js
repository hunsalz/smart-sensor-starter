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
    "revision": "3185b9cbbf3944ae8b80927edf4bf3cd"
  },
  {
    "url": "404/index.html",
    "revision": "3185b9cbbf3944ae8b80927edf4bf3cd"
  },
  {
    "url": "assets/css/0.styles.d830eec0.css",
    "revision": "e228c1dd208ddf059f49156d5a0ec65c"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "708d3665a44785dea118cce53446cd49"
  },
  {
    "url": "assets/data/index.json",
    "revision": "29c18c11482835a4a74262d0854dd71a"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "d44ecf83a75f3d4840e176702b59231a"
  },
  {
    "url": "assets/data/markdown-test-file/index.json",
    "revision": "6647ed47d98adeab1ec3a3757d1195d2"
  },
  {
    "url": "assets/data/say-hello-to-gridsome/index.json",
    "revision": "30b8bcda5ac9f9ef01b13054436d5142"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "9ae4ea31eaf18e513aaba95fcb6e9aca"
  },
  {
    "url": "assets/data/tag/Markdown/index.json",
    "revision": "d8c0ef3c1d59233a505073b1ad802cfb"
  },
  {
    "url": "assets/data/tag/Releases/index.json",
    "revision": "ac1d936eb2e7ca0be430f1fc73ebaffb"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "3b2e2ad78ea1f434934aa5b723f9b01e"
  },
  {
    "url": "assets/data/tag/Test files/index.json",
    "revision": "94fee9f61429083f6936f5bcd5fefa2f"
  },
  {
    "url": "assets/js/app.55298366.js",
    "revision": "356c9c316d7405d472551623c09f3544"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.6e92453a.js",
    "revision": "b875cbb2fa8d71653fa389789585ef62"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.5549312e.js",
    "revision": "ae3ac70c7dc92d35dfcf3bb1604816d8"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.a88d8136.js",
    "revision": "a3d2ecf46d01440fa333a3355947429c"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.4bfbecc3.js",
    "revision": "101f395d94e77f5dd23926d0b78c2f18"
  },
  {
    "url": "assets/static/author.e6b6009.4c5944374ea7ab45614c03412195f01d.jpg",
    "revision": "cab96e9b1b147eebe6890b05a549becd"
  },
  {
    "url": "assets/static/esp32.07cc2b7.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "fc64c073f99911c612e5d242de2fe9f5"
  },
  {
    "url": "assets/static/esp32.2665e34.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "37d6bdb29827068924a0f344bff8fa74"
  },
  {
    "url": "assets/static/esp32.42db587.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "c8f508fd06c4ca3a4a4a87cb64065d1b"
  },
  {
    "url": "assets/static/esp32.81b85c1.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "833256b16ac3ac032715f620bf324875"
  },
  {
    "url": "assets/static/esp32.82a2fbd.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "c5a74fc2753b61a993aad809c053e2e9"
  },
  {
    "url": "assets/static/esp32.a67b0b2.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "c5a74fc2753b61a993aad809c053e2e9"
  },
  {
    "url": "assets/static/esp32.cbab2cf.5f26e714a295fea020dbdff12a80a332.jpeg",
    "revision": "34ab3473289c1518d7a7390e6eb57909"
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
    "url": "index.html",
    "revision": "065aa8ca5c8e5a4b232cb4e57f11693e"
  },
  {
    "url": "kitchen/index.html",
    "revision": "88685329e0e6aedc3d0372434c9a8895"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "markdown-test-file/index.html",
    "revision": "776c1188ea9cde2b8affed9aa1f47521"
  },
  {
    "url": "say-hello-to-gridsome/index.html",
    "revision": "d95fbbf3cd092d9892d466ee9df38bdc"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "b499e7d74a332937243387dbe5e0e8b2"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "40d70253c4ff0f33e187dcb9995c5491"
  },
  {
    "url": "tag/Releases/index.html",
    "revision": "d1c72221aee275c42c1e581300d605eb"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "f6f16728b7796b36401b3af9f15779b4"
  },
  {
    "url": "tag/Test files/index.html",
    "revision": "5360034678f0548777c164bd634034cc"
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
    "url": "tag/Markdown",
    "revision": "60307797bf2abbd6f9c1bfecb1268dca"
  },
  {
    "url": "tag/Test%20files",
    "revision": "838d8df00bbc7ae7e3e0976376477bb2"
  },
  {
    "url": "tag/Releases",
    "revision": "31899f27445a5cc533ef2d1cd0effeda"
  },
  {
    "url": "kitchen",
    "revision": "00d96ba4a29deb50d190184bcb516747"
  },
  {
    "url": "markdown-test-file",
    "revision": "57b70cf3e25f314aded727e0dba3bd3a"
  },
  {
    "url": "say-hello-to-gridsome",
    "revision": "67dab9defa0c8942c0a0aa4811cb1749"
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