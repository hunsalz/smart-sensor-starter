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
    "revision": "ba7d1be17eb4bb9a00b81fb591600db6"
  },
  {
    "url": "404/index.html",
    "revision": "ba7d1be17eb4bb9a00b81fb591600db6"
  },
  {
    "url": "assets/css/0.styles.274701bb.css",
    "revision": "8836ef0377c6bbe21b0bbacc7af275c6"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "232daf31080e2672d4bb655dc8229a96"
  },
  {
    "url": "assets/data/index.json",
    "revision": "834fa251057ef515c716e3ee992a333b"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "24220fe4e87dc1ae6076cadbe242627c"
  },
  {
    "url": "assets/data/markdown-test-file/index.json",
    "revision": "15fe69bd91b585b8d24a678b9d84193b"
  },
  {
    "url": "assets/data/say-hello-to-gridsome/index.json",
    "revision": "8aeea12081febb9b9afb3da4e922adc1"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "8f8858787a2062a69d32d8b14e30de6c"
  },
  {
    "url": "assets/data/tag/Markdown/index.json",
    "revision": "b3bf16f8a1e84a54ca576fb81c174d91"
  },
  {
    "url": "assets/data/tag/Releases/index.json",
    "revision": "43f75d92773c447b83daf593eb10a71c"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "ee6d0e134244b0018152c15c0d12fd26"
  },
  {
    "url": "assets/data/tag/Test files/index.json",
    "revision": "1b48aa76854662c51a7ff67f84875de2"
  },
  {
    "url": "assets/js/app.1689f1c4.js",
    "revision": "2fd3788711ffcb1dd3f4393f5b51a0ce"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.614a583c.js",
    "revision": "d4b63dd5e636064dda977d245aff2282"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.edf132af.js",
    "revision": "8e90b44d8ba9864a041a34e4ad69128c"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.9bfa4ed0.js",
    "revision": "24e7bdd4bfa25eb4426193b7330953f7"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.0c517d16.js",
    "revision": "54073ca8fbe71a3b08cd7163d68a2c0e"
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
    "revision": "309c8faa18a0dce5a9e30267df9dfa3f"
  },
  {
    "url": "kitchen/index.html",
    "revision": "a3b1f274dfb958877ddf6315aa3fc158"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "markdown-test-file/index.html",
    "revision": "9a88416903ccfad00ab01e3f0a693f5d"
  },
  {
    "url": "say-hello-to-gridsome/index.html",
    "revision": "f226fa08c925529fac135c8177cbf927"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "9ba6be7935fb474fbe297da640a239eb"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "fbd836d30445a12999fbcc60332558a0"
  },
  {
    "url": "tag/Releases/index.html",
    "revision": "737135704f674caa27a6e88d60333194"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "29035b61b9395b1eccda78a097fff4ef"
  },
  {
    "url": "tag/Test files/index.html",
    "revision": "28662906a22802eb223329e2eb584468"
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