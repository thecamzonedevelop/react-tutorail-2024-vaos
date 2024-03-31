import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // change './src' to the path you want '@' to resolve to
    }
  },
  plugins: [react()],
  server: {
    proxy: {
      // "/api": process.env.NODE_ENV === 'production' ? "https://api.v-post.site" : "http://localhost:5500",
    },
  },
})
