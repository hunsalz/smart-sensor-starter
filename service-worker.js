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
    "revision": "03e2fd47a0e327421e6343aa341d442d"
  },
  {
    "url": "404/index.html",
    "revision": "03e2fd47a0e327421e6343aa341d442d"
  },
  {
    "url": "assets/css/0.styles.5b01a8b0.css",
    "revision": "67a375dd9bcd7459fe9eff155aa26d01"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "2da89911558e0cd0a78ff42440cfd509"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "7f676ac150fc9db12b7f9d83668404df"
  },
  {
    "url": "assets/data/index.json",
    "revision": "2b7d0a5873e6b74671122c7161b67624"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "1ac7da8ce46b38dd8c782c40f425f891"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "aed506e190ef6217f69b4956ac37e5f0"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "a99e83b56246664008935129ea4256e6"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "bad6ce60f4a7dd87dae0fe51ed737960"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "055bebe9bac55efb3b03a6991aab11a2"
  },
  {
    "url": "assets/js/app.0b3f727e.js",
    "revision": "a502aaecd0e9dfecf1239602ee608aa6"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.f3448eb5.js",
    "revision": "266eb84e580fefa0a8708d7f5ab3e039"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.0d776343.js",
    "revision": "6caf9d073b1879bfe832988a087c33d7"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.a3659f9d.js",
    "revision": "643b85cc503474a9ab1d89cc93a12602"
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
    "revision": "19c34d1e6088dfa557e3e8eac8bbd506"
  },
  {
    "url": "index.html",
    "revision": "037c594a073d219a864e01ece544677b"
  },
  {
    "url": "kitchen/index.html",
    "revision": "82cdc10a1a48c0e92a4ec79917c6ea08"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "b55dfb9e2f7e2c004a790f43f92d571d"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "b7daa0b85fa5cda71a96dbfe1359dbda"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "027d4cd2402a948dbe8a86677613ee2f"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "0cd21fa833874d26e1a39920f945bdd2"
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