
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/expenses",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/expenses"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2283, hash: '75ee699ba358c71e2fc458d162dbe7eb9e4dd2affb65752ab6b7023632d76af6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1096, hash: '4f35bce730a1826d847c683e705e6d688153c5ee092e554578ddfb8a7fa5a4ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 6714, hash: 'aa6480eb1c02a3ad17a01b6811cb53834adaf2511ba704a5e7ff3e4044c263f0', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'styles-DCUCBFO4.css': {size: 7143, hash: 'agm8dAOMbkg', text: () => import('./assets-chunks/styles-DCUCBFO4_css.mjs').then(m => m.default)}
  },
};
