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
    "revision": "31f893bedd08d8befcdcce29bf5d38ca"
  },
  {
    "url": "404/index.html",
    "revision": "31f893bedd08d8befcdcce29bf5d38ca"
  },
  {
    "url": "assets/css/0.styles.378d53fe.css",
    "revision": "54fd3e8e06f7881e3b14cb8c2c91cd1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "8758a1484ff6a21f78581c72f2897ad0"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "622d98de100e98ba2a784260daa88c1b"
  },
  {
    "url": "assets/data/index.json",
    "revision": "80c5144d585a4e29e8f7baf25a48d0d1"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "20eac9eb2e575217b59c2f9297fbe9ac"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "401c2eb4b9e6016d90ac9051fe1d00bc"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "98a5c48fbc968262a840a1cfe0d11f2f"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "482b35a1985d085f4575b33af10ad462"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "7d14da934efa46b07b3b15eb9c17e907"
  },
  {
    "url": "assets/js/app.50c5afb9.js",
    "revision": "e944d4b2d1c5ab72c3d087da1faee02d"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.c66eadd6.js",
    "revision": "6d52dd1ad19f05c9eff958c91eb33420"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.fa619ee2.js",
    "revision": "b6b4bc5e317f9f25f93711bbeca497f0"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.cd964380.js",
    "revision": "074a1c7a4c546dbe0c8b04b2b3e6a614"
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
    "revision": "3ef34aaaebf422a96403781f652f7bb8"
  },
  {
    "url": "index.html",
    "revision": "1fae7a2d9f017e4fe8b8d5c13edcfc23"
  },
  {
    "url": "kitchen/index.html",
    "revision": "a2660b7c0efccfdd8cebe6af259bc761"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "d0aded9594f7497c39e1ebb29bcdf2cd"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "921a06c287695a0fe4e1a8614906d3e9"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "c68bae49f12cceb007614be08f76faa8"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "a2fff069e55d3830765854e69ddfcaa3"
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