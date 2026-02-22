import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // In Tailwind v4, putting tailwindcss() first is often safer
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      // This allows you to import like: import { Button } from '@/app/components/Button'
      '@': path.resolve(__dirname, './src'),
    },
  },
  // This ensures Vite doesn't get confused by your SVG and CSV files
  assetsInclude: ['**/*.svg', '**/*.csv'],
})