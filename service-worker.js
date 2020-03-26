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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0615c9e033b8ececbfa285dccee06e38"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "70b442fb1640c1597bc5b08dc0982f82"
  },
  {
    "url": "assets/css/0.styles.395cd503.css",
    "revision": "6bac6c58104097d880ed1400c81673b0"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/3.22c5422c.jpg",
    "revision": "22c5422cac886d5482d95b94ea0edb32"
  },
  {
    "url": "assets/img/dz1.e565b114.png",
    "revision": "e565b114dea18c8ab5b36d75042e5e61"
  },
  {
    "url": "assets/img/dz5.c623aa83.png",
    "revision": "c623aa836a5efaf11ae53ce3b95fb24d"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/img/qkb3.e8d90d00.png",
    "revision": "e8d90d00668dc9297ef52d1d1c010120"
  },
  {
    "url": "assets/img/qkb4.ce151d6e.png",
    "revision": "ce151d6ee838e6e849240136d6457a02"
  },
  {
    "url": "assets/img/zyy1.67db30a3.png",
    "revision": "67db30a3ecd88730a8c19aee8e70e40e"
  },
  {
    "url": "assets/js/1.75264009.js",
    "revision": "aea84235b0dfac967aa4a60f8454118c"
  },
  {
    "url": "assets/js/10.99ce920a.js",
    "revision": "6d1c0ac314eeec0d627de4f316bed3bd"
  },
  {
    "url": "assets/js/11.b23c35cd.js",
    "revision": "88bb03d72bfa000cd472f9ba98ce6eb9"
  },
  {
    "url": "assets/js/12.a2cf6586.js",
    "revision": "f526f58266caf6e5c7485cb232e5ba83"
  },
  {
    "url": "assets/js/13.06b288ed.js",
    "revision": "59e07769b3dc296eacc4ec59d1963777"
  },
  {
    "url": "assets/js/14.6e26b32d.js",
    "revision": "c70778d4095eb8aca99d71992c67a714"
  },
  {
    "url": "assets/js/15.c1c1ec0e.js",
    "revision": "e8f7b39d8d51945ca8b2e9ca9ba729f8"
  },
  {
    "url": "assets/js/16.cc0be713.js",
    "revision": "b6b4be3670cfd62a9aedc57b0b74ccd4"
  },
  {
    "url": "assets/js/17.448d70ea.js",
    "revision": "3ca5c4c3cf2c347124679245b558a141"
  },
  {
    "url": "assets/js/18.9fb9cff2.js",
    "revision": "532f563f0088840181f6d72a99f3ec01"
  },
  {
    "url": "assets/js/19.10ec86c2.js",
    "revision": "3fbeb94880a1fb2e567888be45fb8cd3"
  },
  {
    "url": "assets/js/2.13afa1ee.js",
    "revision": "d7d9a70163e6377b3a8313ea75e78be4"
  },
  {
    "url": "assets/js/20.c43ea0f8.js",
    "revision": "7768c15e04e2b943cda80f056f1b2279"
  },
  {
    "url": "assets/js/21.d9c0dcc5.js",
    "revision": "e5d377e07f05be9450b8dedf52fe3f73"
  },
  {
    "url": "assets/js/22.1464f049.js",
    "revision": "6493d03cae43ecc69946c802338ee95a"
  },
  {
    "url": "assets/js/23.1673cf53.js",
    "revision": "6246e0ccfeed00420671f15663eacb85"
  },
  {
    "url": "assets/js/24.a138a543.js",
    "revision": "4aff9680dc8f77339ceef6030f8f2ae1"
  },
  {
    "url": "assets/js/25.f4d85ddc.js",
    "revision": "eed0c914cc169f2f26cd46c727142c8b"
  },
  {
    "url": "assets/js/26.f85b7fed.js",
    "revision": "5b1b02d443236c2254c16eb6ffc4c30a"
  },
  {
    "url": "assets/js/27.399a75b7.js",
    "revision": "3297800ca97e644c0404f5aed288478c"
  },
  {
    "url": "assets/js/28.29257420.js",
    "revision": "553f765d22e53f8f660f085c07c8d13b"
  },
  {
    "url": "assets/js/29.759ec459.js",
    "revision": "bea97e8bb33592286c653e24abf84357"
  },
  {
    "url": "assets/js/3.be68ce54.js",
    "revision": "b311f67eb4c3938fb6157fccad12efb2"
  },
  {
    "url": "assets/js/30.875bb905.js",
    "revision": "d71ea916f25c794e2e1db8993dbd2b67"
  },
  {
    "url": "assets/js/31.892c3273.js",
    "revision": "800e3ce35c8ede5fb8753b0eef5a5b2a"
  },
  {
    "url": "assets/js/32.574eafe4.js",
    "revision": "7ad16c04be679d0a744188d9c9116ed6"
  },
  {
    "url": "assets/js/33.1c7992ff.js",
    "revision": "e92e8dbb54689699d52ee06c077d434f"
  },
  {
    "url": "assets/js/34.6ca509f5.js",
    "revision": "b8579320d3e37de23fa0699a5993bff0"
  },
  {
    "url": "assets/js/35.467bc4ab.js",
    "revision": "c72b485fe037f6c11fb674cd4356c792"
  },
  {
    "url": "assets/js/36.cdc58d10.js",
    "revision": "f1c3701afd1d2168330f80f0c7790db6"
  },
  {
    "url": "assets/js/37.b8a53b54.js",
    "revision": "23c336b73ad63ba805976256b985512d"
  },
  {
    "url": "assets/js/38.b8374dd8.js",
    "revision": "9d4b5d215d35f7b2f0faba3b5576aaf6"
  },
  {
    "url": "assets/js/39.97a8675d.js",
    "revision": "77bc520bd6e6080e8c1a62e113795dbf"
  },
  {
    "url": "assets/js/4.3b6e6970.js",
    "revision": "6b674d74a6b24a7049b6858bc7b50883"
  },
  {
    "url": "assets/js/40.a86867f6.js",
    "revision": "4d506b6eee142044a366e7988b337ed0"
  },
  {
    "url": "assets/js/41.dff52cf2.js",
    "revision": "e96b0eb9260554af7eaa10e40dc1580b"
  },
  {
    "url": "assets/js/42.853bf881.js",
    "revision": "1ccc0d8739b1ee8b2cf08301d5b90d22"
  },
  {
    "url": "assets/js/43.1a1ac357.js",
    "revision": "f19bafdfb199b3f03d8c079e6681439d"
  },
  {
    "url": "assets/js/5.0b9f2628.js",
    "revision": "bea33f8d508bc2dcae7db2ad317c83fa"
  },
  {
    "url": "assets/js/6.f8153584.js",
    "revision": "b0ba42ce6fba61800d1c48df2d55322e"
  },
  {
    "url": "assets/js/7.960e42a4.js",
    "revision": "02811a7741b2c24c496e60c5eb3204a2"
  },
  {
    "url": "assets/js/9.e77f29c9.js",
    "revision": "2e8594111f84e935df8069e7252c7334"
  },
  {
    "url": "assets/js/app.4e01488e.js",
    "revision": "55d7fa2fa7de44d5e60488e2af91b6aa"
  },
  {
    "url": "authors/index.html",
    "revision": "989b8d1c7729b24954da0d07805f322d"
  },
  {
    "url": "authors/xuguanqun.html",
    "revision": "7b78db0709adc7667deebef96b3421eb"
  },
  {
    "url": "autores/xuguanqun.jpg",
    "revision": "1c608a3f9de4ca98975ee886dcb9db19"
  },
  {
    "url": "avatar.png",
    "revision": "9ef8f8e10f159f6b31782f9ad2c536b1"
  },
  {
    "url": "categories/doc.html",
    "revision": "e601ac2fed40dfb0e80f0aeee4b132b5"
  },
  {
    "url": "categories/index.html",
    "revision": "b045b62314d008b1e0fe7f47b2459130"
  },
  {
    "url": "categories/post.html",
    "revision": "09a23ba352a88d60b02a9c42cea26261"
  },
  {
    "url": "categories/translate.html",
    "revision": "beaea0995a0b33d8e8b9ee2f57556229"
  },
  {
    "url": "contact/index.html",
    "revision": "dfbb8194567403e647be08ccb5142bb8"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "index.html",
    "revision": "b9ef46a34d1cab80c12910cda27c6fef"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "post/0.jpg",
    "revision": "95565cc45517dbf7c1add8960441b581"
  },
  {
    "url": "post/1.png",
    "revision": "2c86ecf7bbdc94131574d21ca3852dae"
  },
  {
    "url": "post/2.jpg",
    "revision": "e1f53f9a2ebc930c0bbf5e56448291ee"
  },
  {
    "url": "post/3.jpg",
    "revision": "22c5422cac886d5482d95b94ea0edb32"
  },
  {
    "url": "post/dz0.0.png",
    "revision": "328cdd7e0a942879cef00da2e1229df1"
  },
  {
    "url": "post/dz0.png",
    "revision": "23cc0cb6f3e2d190478e8b83f0a8f6e9"
  },
  {
    "url": "post/dz1.png",
    "revision": "e565b114dea18c8ab5b36d75042e5e61"
  },
  {
    "url": "post/dz2.png",
    "revision": "3b11260090f94ad97a81bdd651ca179c"
  },
  {
    "url": "post/dz3.png",
    "revision": "607555390968266b8e3c39ff5f84eaf8"
  },
  {
    "url": "post/dz4.png",
    "revision": "71dd0af100459777453777800838d63a"
  },
  {
    "url": "post/dz5.png",
    "revision": "c623aa836a5efaf11ae53ce3b95fb24d"
  },
  {
    "url": "post/qkb1.png",
    "revision": "0ae2f53c24b8c928c343494557f5a63b"
  },
  {
    "url": "post/qkb2.png",
    "revision": "52a44f09c34106c98d832f9a377fea2f"
  },
  {
    "url": "post/qkb3.png",
    "revision": "e8d90d00668dc9297ef52d1d1c010120"
  },
  {
    "url": "post/qkb4.png",
    "revision": "ce151d6ee838e6e849240136d6457a02"
  },
  {
    "url": "post/zyy1.png",
    "revision": "67db30a3ecd88730a8c19aee8e70e40e"
  },
  {
    "url": "posts/await.html",
    "revision": "5747b7b09fc9d5898fea6f4f0ad1b535"
  },
  {
    "url": "posts/doc_browser.html",
    "revision": "f04858722da4c56c0309930249d25fe8"
  },
  {
    "url": "posts/doc_devtool.html",
    "revision": "a717e4f4ef6887b63db3a328a6dc3945"
  },
  {
    "url": "posts/doc_js.html",
    "revision": "bae0bcfa395860c130215ba803534500"
  },
  {
    "url": "posts/index.html",
    "revision": "c448d222bb508f5ba70695c4dababa0c"
  },
  {
    "url": "posts/json.html",
    "revision": "15fd4bfab9650cf618ac6e436f7e5a57"
  },
  {
    "url": "posts/wechat-es7.html",
    "revision": "649c2e6e5f1eb6db79834b94822f012b"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "xuguanqun-logo-1.png",
    "revision": "edf5b8ed6a754994647198194c2f1ba9"
  },
  {
    "url": "xuguanqun-logo-2.png",
    "revision": "af18370defad40b1e25600b9fc2d0454"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
