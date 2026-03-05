import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://niuniu.github.io/godot4-csharp-learning',
  output: 'static'
});
