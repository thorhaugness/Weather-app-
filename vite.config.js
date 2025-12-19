import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base so the site works when hosted under /<repo>/
export default defineConfig({
  base: './',
  plugins: [react()]
})
