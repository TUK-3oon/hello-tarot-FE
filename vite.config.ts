import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    proxy: {
      "/card": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/card/, '/card')
      },
      "/game": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/game/, '/game')
      }
    },
    
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
});