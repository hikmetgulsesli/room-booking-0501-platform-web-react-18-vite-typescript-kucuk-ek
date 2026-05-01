import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react/cjs/react.development.js'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom.development.js'),
      'react-dom/test-utils': path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom-test-utils.development.js'),
    },
  },
});
