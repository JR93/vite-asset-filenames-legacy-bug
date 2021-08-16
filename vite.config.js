import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), legacy()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: assetInfo => {
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash][extname]'
          }
          return 'assets/img/[name]-[hash][extname]'
        }
      }
    }
  }
})