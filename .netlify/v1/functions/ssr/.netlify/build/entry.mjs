import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B-XSXi9J.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/category.astro.mjs');
const _page2 = () => import('./pages/gamehome.astro.mjs');
const _page3 = () => import('./pages/loadingscreen.astro.mjs');
const _page4 = () => import('./pages/login.astro.mjs');
const _page5 = () => import('./pages/rounds/round-one.astro.mjs');
const _page6 = () => import('./pages/user.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/category.astro", _page1],
    ["src/pages/gamehome.astro", _page2],
    ["src/pages/loadingscreen.astro", _page3],
    ["src/pages/login.astro", _page4],
    ["src/pages/rounds/round-one.astro", _page5],
    ["src/pages/user.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c45f82a4-e997-4c5e-be5d-e01d7faa83d8"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
