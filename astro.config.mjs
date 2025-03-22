import { defineConfig, envField } from 'astro/config';
import { seoConfig } from './src/utils/seo';
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: seoConfig.site,
  integrations: [react({
    experimentalReactChildren: true
  }), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel(),
  env: {
    schema: {
      RESEND_KEY: envField.string({ context: "server", access: "secret" })
    }
  }
});