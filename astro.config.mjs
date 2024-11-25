// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  },

  output: "hybrid",
  adapter: vercel(),
});
