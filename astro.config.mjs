import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import animations from "@midudev/tailwind-animations";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  plugins: [animations],
});
