import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const ViteConfig = defineConfig(
  {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '*': path.resolve(__dirname, './src/'),
        App: `${path.resolve(__dirname, './src/App/')}`,
        assets: `${path.resolve(__dirname, './src/assets/')}`,
        components: `${path.resolve(__dirname, './src/components/')}`,
        helpers: `${path.resolve(__dirname, './src/helpers/')}`,
        hooks: `${path.resolve(__dirname, './src/hooks/')}`,
        layouts: `${path.resolve(__dirname, './src/layouts/')}`,
        routes: `${path.resolve(__dirname, './src/routes/')}`,
        pages: path.resolve(__dirname, './src/pages'),
        types: `${path.resolve(__dirname, './src/@types')}`,
        public: `${path.resolve(__dirname, './public/')}`,
      },
    },
  }
);

// https://vitejs.dev/config/
export default ViteConfig;
