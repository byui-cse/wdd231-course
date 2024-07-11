import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://byui-cse.github.io",
  base: "/wdd231-course",
  integrations: [mdx(), sitemap()]
});
