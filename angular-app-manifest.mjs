
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23615, hash: 'e0490fadb24571308d1b53b78c9d7b3862f70d39dd93623def2f5641c1812582', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17136, hash: 'cfe9f67468e62ed9b46e6c50e983383fb3537a429f35a92c00232af25d8082c9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33342, hash: '36de0c5863dda7bc001bafb18f8e6e10bfd9e01de94c5361e70f33ef0a033436', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QNJMBO4I.css': {size: 7032, hash: 'GOMZwjcH14k', text: () => import('./assets-chunks/styles-QNJMBO4I_css.mjs').then(m => m.default)}
  },
};
