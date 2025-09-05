import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'
import remarkGfm from 'remark-gfm'
export default defineConfig({
  plugins: [
      react(),
      mdx({
          remarkPlugins: [remarkGfm],
      }),
      tailwindcss()
  ],
})
