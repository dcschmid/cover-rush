import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BCx95_ce.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_OY7epSy2.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_rOBdstzn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const InstaStory = new Proxy({"src":"/_astro/instastory.CRdeupUk.png","width":480,"height":815,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/instastory.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Instastory", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Picture", $$Picture, { "class": "cover", "src": InstaStory, "formats": ["avif", "webp"], "alt": "", "data-astro-cid-j7pv25f6": true })} <a class="button" href="/login" data-astro-cid-j7pv25f6><span class="rainbowText" data-astro-cid-j7pv25f6>COVERSHUFFLE</span></a> </div> ` })} `;
}, "/Users/danielschmid/projects/cover-shuffle/src/pages/index.astro", void 0);

const $$file = "/Users/danielschmid/projects/cover-shuffle/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
