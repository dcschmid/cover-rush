import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BCx95_ce.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_rOBdstzn.mjs';
import { $ as $$Layout } from '../chunks/Layout_OY7epSy2.mjs';
import { $ as $$Button } from '../chunks/Button_DoqVDbQP.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const PopRockCover = new Proxy({"src":"/_astro/poprock-big.D7dZUGvn.png","width":240,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/category/poprock-big.png";
							}
							
							return target[name];
						}
					});

const $$Category = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spiel-Home", "data-astro-cid-p3sluwlz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="introText" data-astro-cid-p3sluwlz> <div class="headline" data-astro-cid-p3sluwlz>PopRock gewählt!</div> <div class="subline" data-astro-cid-p3sluwlz>Lassen Sie die Energie fließen und rocken Sie mit!</div> </div> <div class="category" data-astro-cid-p3sluwlz> <div class="cover" data-astro-cid-p3sluwlz> ${renderComponent($$result2, "Picture", $$Picture, { "src": PopRockCover, "formats": ["avif", "webp"], "alt": "", "data-astro-cid-p3sluwlz": true })} </div> <div class="categoryHeadline" data-astro-cid-p3sluwlz>PopRock – 70er bis heute</div> <div class="text" data-astro-cid-p3sluwlz>
Poprock vereint die eingängigen Melodien des Pop mit der Energie des Rock. Dieser Stil bringt emotionale Balladen
      und mitreißende Hits hervor, geprägt von vielseitigen Künstlern und Bands.
</div> </div> <div class="centerButton" data-astro-cid-p3sluwlz> ${renderComponent($$result2, "Button", $$Button, { "buttonText": "weiter", "url": "/rounds/round-one", "data-astro-cid-p3sluwlz": true })} </div> ` })} `;
}, "/Users/danielschmid/projects/cover-shuffle/src/pages/category.astro", void 0);

const $$file = "/Users/danielschmid/projects/cover-shuffle/src/pages/category.astro";
const $$url = "/category";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Category,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
