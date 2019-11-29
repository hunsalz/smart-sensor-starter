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
    "revision": "e28bda47aee847d050b2d406fd9afca5"
  },
  {
    "url": "404/index.html",
    "revision": "e28bda47aee847d050b2d406fd9afca5"
  },
  {
    "url": "assets/css/0.styles.378d53fe.css",
    "revision": "54fd3e8e06f7881e3b14cb8c2c91cd1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "7ad8082b7257a1a5c9b1bacd592e9822"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "d7b2b438aabf752d7fcbff95e6a0c815"
  },
  {
    "url": "assets/data/index.json",
    "revision": "cfee40f83d05e402f0d3230c47896bdd"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "e5070bed0d05e90bf231f60fee5d543a"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "b843896b33e301ac9738da42cf2eab1a"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "87b4933423f407ec489f08a3f39b9c66"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "873fd4509647af3cef87300a70d7f2b4"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "0cfdc1a83c794d7e7ebcca273c7fb1bd"
  },
  {
    "url": "assets/js/app.d8cd935e.js",
    "revision": "e14db83952cf16ada5ddd369e693de9e"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.e4c3d8e6.js",
    "revision": "b5a6139c74a8368f919f9877cd1362e9"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.1976beca.js",
    "revision": "787a8da195592f67c77f8a0e191f5294"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.633656b4.js",
    "revision": "8d045215c5223a9ca4c9ef186d3a9c64"
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
    "revision": "1bfb6ee723f7be2d1d7e8262f0b4f6a8"
  },
  {
    "url": "index.html",
    "revision": "077a2659d5b149ad8ea3c21d21863a03"
  },
  {
    "url": "kitchen/index.html",
    "revision": "c2186c46ab87cb6875461bc86bcd0e96"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "0dccec69175539e6b176babea0a1aa01"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "941bf228b840b0996b5b1c6278eeb0e6"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "5fad398a4e93d237e4ae3a2d1f743cf7"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "874d7ed65f34cdf3a6aecfdba72db257"
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