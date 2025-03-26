// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: "https://Keshav-writes-code.github.io",
  base: "astro-svelte-bug-repo",
});

