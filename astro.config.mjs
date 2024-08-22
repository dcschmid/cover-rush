import { defineConfig } from "astro/config";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
import db from "@astrojs/db";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://o9m74nbeecerwsdt12134.cleavr.xyz",
  output: "server",
  integrations: [icon(), playformCompress(), db()],
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    optimizeDeps: {
      exclude: ["astro:db"],
    },
  },
  security: {
    checkOrigin: true,
  },
  middleware: [
    async (context, next) => {
      context.headers["Access-Control-Allow-Origin"] = "*";
      context.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
      context.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
      await next();
    },
  ],
});
