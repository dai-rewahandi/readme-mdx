import UnpluginInjectPreload from 'unplugin-inject-preload/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import remarkGfm from 'remark-gfm';
import mdx from '@mdx-js/rollup';
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm],
    }),
    tailwindcss(),
    UnpluginInjectPreload({
      files: [
        {
          entryMatch: /src\/content\/readme\.mdx/,
        },
      ],
    }),
  ],
});
