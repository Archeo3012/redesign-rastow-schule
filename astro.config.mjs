// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH können beim Build gesetzt werden (z. B. für GitHub Pages
// unter https://<user>.github.io/redesign-rastow-schule/).
const site = process.env.SITE_URL ?? 'https://www.schule-rastow.de';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
