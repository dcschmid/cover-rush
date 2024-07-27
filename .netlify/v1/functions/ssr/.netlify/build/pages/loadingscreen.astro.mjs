import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BCx95_ce.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_OY7epSy2.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_rOBdstzn.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const CoverShuffle = new Proxy({"src":"/_astro/cover-shuffle.CtKwyfJO.png","width":1080,"height":1833,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/cover-shuffle.png";
							}
							
							return target[name];
						}
					});

const $$Loadingscreen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wilkommen zum Cover Shuffle", "data-astro-cid-hot2qoi7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-hot2qoi7> ${renderComponent($$result2, "Picture", $$Picture, { "class": "cover", "src": CoverShuffle, "formats": ["avif", "webp"], "alt": "", "data-astro-cid-hot2qoi7": true })} <a class="button" href="/gamehome" data-astro-cid-hot2qoi7>Jetzt loslegen</a> </div> ` })} `;
}, "/Users/danielschmid/projects/cover-shuffle/src/pages/loadingscreen.astro", void 0);

const $$file = "/Users/danielschmid/projects/cover-shuffle/src/pages/loadingscreen.astro";
const $$url = "/loadingscreen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Loadingscreen,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
