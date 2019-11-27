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
    "revision": "dd1cafed11aecb38c3fb20cac18e6dec"
  },
  {
    "url": "404/index.html",
    "revision": "dd1cafed11aecb38c3fb20cac18e6dec"
  },
  {
    "url": "assets/css/styles.styles.199a7602.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "072d3d609d88c5533d2354bb5244e67a"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "2cbf0e36e7b6cc343827382b8108120f"
  },
  {
    "url": "assets/data/index.json",
    "revision": "b2c02bac4c4241c8a2cd741c2dcf8282"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "4b1a4c34ae93c848c6404e7aad77a678"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "25880afcb3eaf12ca919c9c7ef30d2d7"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "324b714554a8e1094ec2cd5f8b10ffa1"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "8b89d5c868bc0cea7b242dcd3ce779af"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "ea25ace659a0924c1566b585fd00dea5"
  },
  {
    "url": "assets/js/app.b0881f2a.js",
    "revision": "151ffb1064db0e8f7bdc2f5f90a331b0"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.405e6217.js",
    "revision": "798d5a2a58be5febe684b998fa748b6b"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.0aa67855.js",
    "revision": "5ec3390a7d160fd8ad7a41928cc19616"
  },
  {
    "url": "assets/js/page--src--pages--index-vue~page--src--templates--tag-vue.070fbb78.js",
    "revision": "1224ed0dc3e8c4869cb6de127a7749b7"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.742af043.js",
    "revision": "8f103ada2fbfe8d2026d394d37dd8a50"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.db974ac5.js",
    "revision": "fd88955b1bc91616bd6331ff9f608726"
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
    "revision": "2a2f4715aa4d60a663f5b67ad38b62a4"
  },
  {
    "url": "index.html",
    "revision": "b9093816318f7152f93a6eee12081baf"
  },
  {
    "url": "kitchen/index.html",
    "revision": "52268baee0691c7ada8ab01d2c569a11"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "97187cc8d24b5f87cb7a419c4f559604"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "23b29d718a19a55c6ac2bb2299ca0421"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "30ec210a53ea185cd72ef9a06d3ef93f"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "7ff562d08698e4f1601eae5e79f9abbb"
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