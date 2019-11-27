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
    "revision": "1c11ef37017c2732407eca4de695e105"
  },
  {
    "url": "404/index.html",
    "revision": "1c11ef37017c2732407eca4de695e105"
  },
  {
    "url": "assets/css/0.styles.11d87edf.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "94d33038237cc70de30dec8e4a119cab"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "0de8fc0c8a1d6c4e89db8959851567b6"
  },
  {
    "url": "assets/data/index.json",
    "revision": "9b7e0fcdb7bcfd2acf9d1747b88449bc"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "0d4d90247bed14c3810b1cafc3dad9dc"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "a06ce27cedc298eab6509c464c125a7a"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "9033cd8eced1b7999c36a1189653a9cb"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "948bcfdd979e0a78489ec933cc52fd02"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "726bc3452fdfcded609dd77159fa283c"
  },
  {
    "url": "assets/js/app.aefd0150.js",
    "revision": "7b16b83435c1d37e16cb3176c1389687"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.68fe12b0.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.2a6404b8.js",
    "revision": "1c675d5079d3968a61e12d2953728a54"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.a4663f8a.js",
    "revision": "33bd91bffec65a1e4f9a0b4f7509ad91"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.43071418.js",
    "revision": "b0441761ff86149b0271ce4e9997a37f"
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
    "revision": "bd0cb61c929cea5b54cb305596163533"
  },
  {
    "url": "index.html",
    "revision": "d98bf1b32ee3c893110bf88f691a9a38"
  },
  {
    "url": "kitchen/index.html",
    "revision": "1895ed42395af93c83ebd3559e6b96cd"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "2fd1f8b1d5302e761124e1b3327cb7ab"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "b04f96c8a7e67d5441d6e87902252d41"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "1e7ad092fa61ab8d03b4e98a8693aa32"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "6ebe5a78ba028f394e1edc239d99e483"
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