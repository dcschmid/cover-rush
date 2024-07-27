import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BCx95_ce.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_OY7epSy2.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_rOBdstzn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const ArdLogin = new Proxy({"src":"/_astro/ardlogin.D4QWsR0d.png","width":480,"height":815,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/ardlogin.png";
							}
							
							return target[name];
						}
					});

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ARD Login", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "Picture", $$Picture, { "class": "cover", "src": ArdLogin, "formats": ["avif", "webp"], "alt": "", "data-astro-cid-sgpqyurt": true })} <a class="button" href="/loadingscreen" data-astro-cid-sgpqyurt>Jetzt loslegen</a> </div> ` })} `;
}, "/Users/danielschmid/projects/cover-shuffle/src/pages/login.astro", void 0);

const $$file = "/Users/danielschmid/projects/cover-shuffle/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
