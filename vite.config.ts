import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/personal-site-2/',
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
})
