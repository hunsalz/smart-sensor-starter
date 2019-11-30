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
    "revision": "057bda0dba79b0c7bc14104be8efead8"
  },
  {
    "url": "404/index.html",
    "revision": "057bda0dba79b0c7bc14104be8efead8"
  },
  {
    "url": "assets/css/0.styles.c8475c65.css",
    "revision": "33db22eb0c055774a908a0525777169d"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "23ce247341cca39fb04dae6dd5ba0b81"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "018cd5e0dfc461d748401cbb05eb8c96"
  },
  {
    "url": "assets/data/index.json",
    "revision": "c4788c6c0315a0d81463433feceb96a9"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "d9531b63568d809274448015394938d2"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "f399ebe362b2368c0349ff3ff717910f"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "af8fdf26013a50aa028101b1bd9f8a09"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "b87d50b60e203c67de07a1eb9fe1b31b"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "2714486e8c7c2d594ca604c5b8f5b5a2"
  },
  {
    "url": "assets/js/app.6ecaddfd.js",
    "revision": "97c5e775034f428f2a2f7dbf18e69495"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.6e92453a.js",
    "revision": "b875cbb2fa8d71653fa389789585ef62"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.0b76f1cb.js",
    "revision": "2cfcd75fe8113db7484a6ad103e860d7"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.3ef6ed23.js",
    "revision": "e1314a09e9992e8e858c77aa5f9ba63a"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.00749501.js",
    "revision": "e38f5217cd6361a612a5929bb4082838"
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
    "revision": "5a3736b95c0c4240208a9c5ec26874d7"
  },
  {
    "url": "index.html",
    "revision": "697d7ea7b85846164e0db4040abc2003"
  },
  {
    "url": "kitchen/index.html",
    "revision": "1c327860ccc95cc493456ab327b7dea6"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "b03b2e98c9c505f81f87c1f3dd91cd42"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "afb00e065a003935ecfcf356e1b57fd6"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "67d52508c27955e976ebefcca6b46cfe"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "1432a8fa8c14b205d85314460ae6b696"
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