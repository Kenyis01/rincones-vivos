import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // IMPORTANTE: reemplazar por el dominio real del cliente.
  // El sitemap y las URLs canónicas dependen de esto.
  site: "https://example.com",
  integrations: [sitemap()],
  // Tailwind v4 se procesa vía PostCSS (postcss.config.mjs).
  // En Astro 6 esta es la forma estable; el plugin @tailwindcss/vite
  // falla en build con el motor de Vite actual.
});
