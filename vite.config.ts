import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
