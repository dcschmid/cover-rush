import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [icon(), playformCompress()]
});