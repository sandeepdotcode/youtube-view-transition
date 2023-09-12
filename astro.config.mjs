import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import nodejs from '@astrojs/node';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: 'server',
  adapter: nodejs({
    mode: 'middleware'
  }),
});