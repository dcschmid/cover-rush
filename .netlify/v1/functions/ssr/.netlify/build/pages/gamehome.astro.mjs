import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro } from '../chunks/astro/server_BCx95_ce.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../chunks/Layout_OY7epSy2.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_rOBdstzn.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PlaylistItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlaylistItem;
  const { headline = "", years = "", image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="playlistItem" data-astro-cid-stn3u5x6> ${renderComponent($$result, "Picture", $$Picture, { "class": "cover", "src": image, "formats": ["avif", "webp"], "alt": "", "data-astro-cid-stn3u5x6": true })} <div class="headline" data-astro-cid-stn3u5x6>${headline}</div> <div class="years" data-astro-cid-stn3u5x6>${years}</div> </div> `;
}, "/Users/danielschmid/projects/cover-shuffle/src/components/PlaylistItem.astro", void 0);

const KulturgutCover = new Proxy({"src":"/_astro/kulturgut.BSN-VSFJ.png","width":106,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/category/kulturgut.png";
							}
							
							return target[name];
						}
					});

const PopRockCover = new Proxy({"src":"/_astro/poprock.Dkau_Izv.png","width":106,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/category/poprock.png";
							}
							
							return target[name];
						}
					});

const PartyOnCover = new Proxy({"src":"/_astro/partyon.BzAJ337J.png","width":106,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/category/partyon.png";
							}
							
							return target[name];
						}
					});

const SummerHitsCover = new Proxy({"src":"/_astro/summerhits.CVsaea4z.png","width":106,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/category/summerhits.png";
							}
							
							return target[name];
						}
					});

const TopChartsCover = new Proxy({"src":"/_astro/topcharts.BzS_zL7O.png","width":106,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/category/topcharts.png";
							}
							
							return target[name];
						}
					});

const HipHopCover = new Proxy({"src":"/_astro/hiphop.DM3G0P-M.png","width":106,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielschmid/projects/cover-shuffle/src/assets/category/hiphop.png";
							}
							
							return target[name];
						}
					});

const $$Gamehome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spiel-Home", "data-astro-cid-6g6pdpov": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="introText" data-astro-cid-6g6pdpov> <div class="headline" data-astro-cid-6g6pdpov>Willkommen <span class="name" data-astro-cid-6g6pdpov>Basti</span>!</div> <div class="subline" data-astro-cid-6g6pdpov>Wählen Sie eine <span class="whiteText" data-astro-cid-6g6pdpov>Playlist</span> zum spielen!</div> </div> <div class="choosePlaylist" data-astro-cid-6g6pdpov> ${renderComponent($$result2, "PlaylistItem", $$PlaylistItem, { "headline": "Kulturgut", "years": "Alle Jahrz\xE4hnte", "image": KulturgutCover, "data-astro-cid-6g6pdpov": true })} <a href="/category" data-astro-cid-6g6pdpov>${renderComponent($$result2, "PlaylistItem", $$PlaylistItem, { "headline": "PopRock", "years": "70er bis heute", "image": PopRockCover, "data-astro-cid-6g6pdpov": true })}</a> ${renderComponent($$result2, "PlaylistItem", $$PlaylistItem, { "headline": "Party On!", "years": "2010 bis 2024", "image": PartyOnCover, "data-astro-cid-6g6pdpov": true })} ${renderComponent($$result2, "PlaylistItem", $$PlaylistItem, { "headline": "Summer Hits", "years": "2023/24", "image": SummerHitsCover, "data-astro-cid-6g6pdpov": true })} ${renderComponent($$result2, "PlaylistItem", $$PlaylistItem, { "headline": "Top Charts", "years": "Alle Jahrz\xE4hnte", "image": TopChartsCover, "data-astro-cid-6g6pdpov": true })} ${renderComponent($$result2, "PlaylistItem", $$PlaylistItem, { "headline": "HipHop", "years": "90er", "image": HipHopCover, "data-astro-cid-6g6pdpov": true })} </div> <div class="hint" data-astro-cid-6g6pdpov> ${renderComponent($$result2, "Icon", $$Icon, { "class": "icon", "name": "spotify", "width": 24, "height": 24, "data-astro-cid-6g6pdpov": true })} Spotify Account einbinden um Freunde zu challengen
</div> ` })} `;
}, "/Users/danielschmid/projects/cover-shuffle/src/pages/gamehome.astro", void 0);

const $$file = "/Users/danielschmid/projects/cover-shuffle/src/pages/gamehome.astro";
const $$url = "/gamehome";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gamehome,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
