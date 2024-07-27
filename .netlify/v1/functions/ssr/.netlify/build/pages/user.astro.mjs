import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BCx95_ce.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_OY7epSy2.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_rOBdstzn.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const UserPic = new Proxy({"src":"/_astro/user.CyTg5lyu.jpg","width":507,"height":1581,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/user.jpg";
							}
							
							return target[name];
						}
					});

const $$User = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Instastory", "data-astro-cid-rkrdl5k3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-rkrdl5k3> ${renderComponent($$result2, "Picture", $$Picture, { "class": "cover", "src": UserPic, "formats": ["avif", "webp"], "alt": "", "data-astro-cid-rkrdl5k3": true })} </div> ` })} `;
}, "/Users/danielschmid/projects/cover-shuffle/src/pages/user.astro", void 0);

const $$file = "/Users/danielschmid/projects/cover-shuffle/src/pages/user.astro";
const $$url = "/user";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$User,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
