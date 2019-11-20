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
    "revision": "17b5395b387827f9d7765dfdb3b67d70"
  },
  {
    "url": "404/index.html",
    "revision": "17b5395b387827f9d7765dfdb3b67d70"
  },
  {
    "url": "assets/css/0.styles.c47fd1bb.css",
    "revision": "83976214abf7c62c4a14b37772a12fc2"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "a77cd465f9e1407385a4bb70b25afbdc"
  },
  {
    "url": "assets/data/index.json",
    "revision": "f03f792a084084cd8846973ee93c2b8c"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "805ce163a747efcc7cfd83dab25a283c"
  },
  {
    "url": "assets/data/markdown-test-file/index.json",
    "revision": "829ee30e25235bf2d42460e8b09dd88d"
  },
  {
    "url": "assets/data/say-hello-to-gridsome/index.json",
    "revision": "b9c4aed1a8568362e0ad8e32a36b3c6b"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "48b0c76404a7ad1ff605a7fb72734518"
  },
  {
    "url": "assets/data/tag/Markdown/index.json",
    "revision": "c16db93c773e82e15eb2e1510e022119"
  },
  {
    "url": "assets/data/tag/Releases/index.json",
    "revision": "06c4d21e5844c04bf179f6d693fc6e05"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "e3cf3201a5bc666228034b96457c715f"
  },
  {
    "url": "assets/data/tag/Test files/index.json",
    "revision": "637b32cb0965bfba931b2166cd385793"
  },
  {
    "url": "assets/js/app.1973289c.js",
    "revision": "709588afb1be1d5f20f708dee7ccf984"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.614a583c.js",
    "revision": "d4b63dd5e636064dda977d245aff2282"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.ef0b1df4.js",
    "revision": "b1a1f0da56c3b0c5fd537a854ba1d872"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.68a470a1.js",
    "revision": "b277ef07a0a30a3590375b9cbf24f507"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.d326a260.js",
    "revision": "3787b537d6327d74f371a96126c41f94"
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
    "revision": "e42bf09ead04f2466ef514b8ffa9922d"
  },
  {
    "url": "kitchen/index.html",
    "revision": "fc1e62cb99d1882a65c77d0bba2d67ee"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "markdown-test-file/index.html",
    "revision": "32b624ef337f0c56736035e14c49d8f6"
  },
  {
    "url": "say-hello-to-gridsome/index.html",
    "revision": "cfbac7ca5544c17a3f6586e30a4b2049"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "a1f6cc00829709178363d8d346cfb420"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "dcfd875014f89afa5d042bdf4da63613"
  },
  {
    "url": "tag/Releases/index.html",
    "revision": "8651675e3d55a60c8808b7dea29de511"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "aa2e81462a8e984949c90edeffe63f13"
  },
  {
    "url": "tag/Test files/index.html",
    "revision": "428e63f5542a830ccf70e888fd34fee6"
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