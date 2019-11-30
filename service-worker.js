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
    "revision": "72d1cf038671cbf22278cd0f8bad58b0"
  },
  {
    "url": "404/index.html",
    "revision": "72d1cf038671cbf22278cd0f8bad58b0"
  },
  {
    "url": "assets/css/0.styles.378d53fe.css",
    "revision": "54fd3e8e06f7881e3b14cb8c2c91cd1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "21c257e0f077760eee1ba077b90d37b1"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "1ea100cb8cd80d6bd9f85925ef815267"
  },
  {
    "url": "assets/data/index.json",
    "revision": "5b839ea433d81ceffd40a92c5ceb20cb"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "4677d123b10d33e11f3bfbff9510a64d"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "bfdbf891d10dfa3bfa5348fe0e1ad966"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "0593aa5cbd779801b3f8dd89757b2bcf"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "2bc72257d24169f6cf74074845f1a0c2"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "9d55e1a11045ecb6d5d54f23ca07abc4"
  },
  {
    "url": "assets/js/app.26815a18.js",
    "revision": "feb7af399bc2df013cae70dbc68c8ad7"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.425afcf6.js",
    "revision": "a699395a77cf14ad3e1ed6acde4f2a0f"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.e9017884.js",
    "revision": "b6b4bc5e317f9f25f93711bbeca497f0"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.f47c1cc5.js",
    "revision": "4f845f6e68c2d53188777e293692e57a"
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
    "revision": "f1a5f32651c1949d2e990d9de2a2e50d"
  },
  {
    "url": "index.html",
    "revision": "ed39e67ef6163eb45a3edfd3e6b2c3ed"
  },
  {
    "url": "kitchen/index.html",
    "revision": "d2af069d8a4b814bbedd86591060625a"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "601e8686ca2e5b57cc019c90782df383"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "ea57952bf726e28d8787f1d0e039a996"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "84e37d831bb81a048d36a079440dd620"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "804d81b372e0d89b1492825f28ca6fa8"
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
    "url": "office",
    "revision": "ed147028263968140ce030738a5f490b"
  },
  {
    "url": "kitchen",
    "revision": "00d96ba4a29deb50d190184bcb516747"
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