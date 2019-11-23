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
    "revision": "d311b340998fd4931d300a77a6ab27a1"
  },
  {
    "url": "404/index.html",
    "revision": "d311b340998fd4931d300a77a6ab27a1"
  },
  {
    "url": "assets/css/0.styles.5b01a8b0.css",
    "revision": "67a375dd9bcd7459fe9eff155aa26d01"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "e6ae77237035f6135d36b489e2cd8e53"
  },
  {
    "url": "assets/data/garden/index.json",
    "revision": "d185a390b921c2a1855223fae14e19b4"
  },
  {
    "url": "assets/data/index.json",
    "revision": "d47d06f41b816a936e3a7e484c9dc6f2"
  },
  {
    "url": "assets/data/kitchen/index.json",
    "revision": "3efda12af88ea4bae488897001f68272"
  },
  {
    "url": "assets/data/office/index.json",
    "revision": "738836299bc485999edfb634dc4b96af"
  },
  {
    "url": "assets/data/tag/Altitude/index.json",
    "revision": "8648bcc0be8f52f98241c3fbb378c1da"
  },
  {
    "url": "assets/data/tag/Humidity/index.json",
    "revision": "b377c769a42b1c74291bc3bb7bbc675c"
  },
  {
    "url": "assets/data/tag/Temperature/index.json",
    "revision": "2da3428dd0c2578ffbb2e529243238e9"
  },
  {
    "url": "assets/js/app.5b01257e.js",
    "revision": "abd519c1b8a050a4eee0844e5f8f4efd"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.74193d29.js",
    "revision": "f09cbcbea7e9381983660ad60cea6f1a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.2b4fdfd6.js",
    "revision": "6ccc68dabe6010bf87d358fd53b8e122"
  },
  {
    "url": "assets/js/page--src--templates--sensor-vue.7ded6680.js",
    "revision": "676f41d27acb70c5f585d1291f4d2a36"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.d7a34433.js",
    "revision": "846f978f2ebc55ca60289a81c29f16df"
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
    "revision": "ee646dcfa8367526171b884990e2377f"
  },
  {
    "url": "index.html",
    "revision": "8ca7da3d4ba98dc7b4d677282a2223c7"
  },
  {
    "url": "kitchen/index.html",
    "revision": "d6e5415ab9c3d0d6e21b8212b6ce3e56"
  },
  {
    "url": "manifest.json",
    "revision": "9850f1879b51766d062de6c3ab3c4585"
  },
  {
    "url": "office/index.html",
    "revision": "d11fa18061eda0bcd174b142aea6f4ec"
  },
  {
    "url": "tag/Altitude/index.html",
    "revision": "529ee44b4f9dfdb6cba2d7ddf79594bf"
  },
  {
    "url": "tag/Humidity/index.html",
    "revision": "e4a90c3e503e8e824b50aef8bccba024"
  },
  {
    "url": "tag/Temperature/index.html",
    "revision": "9b9ae5e8e72f5d1b2d9cb3eca8f0fab6"
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
    "url": "office",
    "revision": "ed147028263968140ce030738a5f490b"
  },
  {
    "url": "kitchen",
    "revision": "00d96ba4a29deb50d190184bcb516747"
  },
  {
    "url": "garden",
    "revision": "5c4bb96b75c4a24cdd2909e0a5d9951c"
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