import { defineConfig } from '@astrojs/starlight/config';
import GlobalFooter from './src/components/GlobalFooter.astro';

export default defineConfig({
  title: 'QTC',
  description: 'Clean doc site.',
  sidebar: [],
  slots: {
    footer: GlobalFooter
  }
});
