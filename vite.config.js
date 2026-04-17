import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
// Tailwind v4 runs via PostCSS (`postcss.config.js` + `@tailwindcss/postcss`), not `@tailwindcss/vite`,
// so Vite’s CSS pipeline and PostCSS stay aligned and avoid the v3 @tailwind-base error.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
