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
    "revision": "d8126e1bb979d8e929842201ea32fde1"
  },
  {
    "url": "404/index.html",
    "revision": "d8126e1bb979d8e929842201ea32fde1"
  },
  {
    "url": "assets/css/0.styles.11d87edf.css",
    "revision": "af15817a8cb9efe5aafa6a2311317338"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "239cff3ac1dc3fd7f4012d6c04bf0896"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "5ffec8108b565b08ac51880e7a461088"
  },
  {
    "url": "assets/data/index.json",
    "revision": "fbd3cc4589195d76d25e297e7ca13055"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "1255a579f24a787fe459465ac868f78c"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "7c9917da0dd269ff36d6c52f531341af"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "fa9f5d25624d10e9f91d82e09250d25d"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "8bc8e383affc433abd1183018f005a1b"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "f54a01f701fffaae7b1eada61187212d"
  },
  {
    "url": "assets/js/app.76b61a24.js",
    "revision": "c2789fb65dea4ec601161b534925ad3a"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.74193d29.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.8f6ef807.js",
    "revision": "bbd424f19f50935604b4f754908824c0"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.1abac57a.js",
    "revision": "0b3925e555d7edbeab61569e3a4dd25e"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.fd025d4d.js",
    "revision": "b7dbc117afea509b7fcf6e275f0f2b27"
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
    "revision": "d2a802ddb91346ba1bacd54ab5d9aace"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "ff82882c2da0bb17285633973ae6d65b"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "f9974bad556938f2707848d1814f13a1"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "f7be2331ae350e64cd1600af80c3683b"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "466eb6d2639408db8b9b58c037297d53"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "69003266b28a85cbbdb7b0ca7c6757f3"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7cf51ec517585d2700f4feb85597548d"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "9fff9a2ceadee823efa116130802fb9a"
  },
  {
    "url": "assets/static/website-icon.png",
    "revision": "505e281bcd369ecc424748ac6e8b6369"
  },
  {
    "url": "garden/index.html",
    "revision": "ac4061115b4247d17ef4479700c09c28"
  },
  {
    "url": "index.html",
    "revision": "791091690fd899eaec93ba7fbe90aacc"
  },
  {
    "url": "kitchen/index.html",
    "revision": "f65a77e959dda9692b8ed1ddfafdf645"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "a0ccbd1ad44e67ca44193c771a5bb9a5"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "2adb6d9915d9f0f459c830ebfa6ac501"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "cece6a70e26312291b204bd02d292143"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "3ed725b1fcc5fa3d780757918455c02f"
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