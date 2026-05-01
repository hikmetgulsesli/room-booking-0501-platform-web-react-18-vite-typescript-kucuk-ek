import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

process.env.NODE_ENV = 'development';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react/index.js'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom/index.js'),
      'react-dom/test-utils': path.resolve(__dirname, 'node_modules/react-dom/test-utils.js'),
    },
  },
});
