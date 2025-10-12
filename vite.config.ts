import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { outDir: 'dist' },
  server:{
    host:true
    // allowedHosts: ['.ngrok-free.app','piranha-complete-uniformly.ngrok-free.app']
  }
})
