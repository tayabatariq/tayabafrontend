import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  assets: ['**/*.PNG', '**/*.jpg', '**/*.jpeg'],
  plugins: [react(), svgr()],
  base:'/',
  server: {
    port: 3000,
  }
})

