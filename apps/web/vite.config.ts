import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ViteConfig = defineConfig(
  {
    plugins: [
      react(),
    ],
  }
);

// https://vitejs.dev/config/
export default ViteConfig;
