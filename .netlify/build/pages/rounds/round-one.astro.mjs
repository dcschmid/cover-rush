import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BCx95_ce.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../../chunks/Layout_OY7epSy2.mjs';
import { $ as $$Button } from '../../chunks/Button_DoqVDbQP.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$RoundOne = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spiel-Home", "data-astro-cid-jlbipeev": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="overlay" class="overlay" data-astro-cid-jlbipeev> <div class="overlay-content" data-astro-cid-jlbipeev> <div class="headline" data-astro-cid-jlbipeev>Runde 1 / 3</div> <div class="subline" data-astro-cid-jlbipeev>
Klicken Sie auf das Albumcover und sortieren Sie die Alben mithilfe der Pfeile in die richtige Reihen-folge nach
<span class="whiteText" data-astro-cid-jlbipeev>Erscheinungsjahr: vorne das neueste, hinten das älteste. </span> <div class="centerButton" data-astro-cid-jlbipeev> ${renderComponent($$result2, "Button", $$Button, { "id": "gameButton", "buttonText": "spielen", "url": "#", "data-astro-cid-jlbipeev": true })} </div> </div> </div> </div> <div class="introText" data-astro-cid-jlbipeev> <div class="headline" data-astro-cid-jlbipeev>Runde 1 / 3</div> <div class="subline" data-astro-cid-jlbipeev>Sortieren Sie nach dem <span class="whiteText" data-astro-cid-jlbipeev>Erscheinungsjahr!</span></div> </div> <div class="category" data-astro-cid-jlbipeev></div> <div class="timer" data-astro-cid-jlbipeev> ${renderComponent($$result2, "Icon", $$Icon, { "name": "next", "width": 48, "height": 48, "data-astro-cid-jlbipeev": true })} <span id="minutes" data-astro-cid-jlbipeev>02</span>:<span id="seconds" data-astro-cid-jlbipeev>00</span> </div> ` })}  `;
}, "/Users/danielschmid/projects/cover-shuffle/src/pages/rounds/round-one.astro", void 0);

const $$file = "/Users/danielschmid/projects/cover-shuffle/src/pages/rounds/round-one.astro";
const $$url = "/rounds/round-one";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RoundOne,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
