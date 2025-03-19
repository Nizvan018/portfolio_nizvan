import { defineConfig, envField } from 'astro/config';

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",

  integrations: [react({
    experimentalReactChildren: true
  })],

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