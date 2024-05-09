import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    proxy: {
      "/card": {  // Use "/card" to match the start of your actual API path
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/card/, '/card') // Optional rewrite
      }
    }
  },
  //아래거는 왜 안되었는지 확인해보자 이건 get('/api/card/front/all'로 받음')
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
});