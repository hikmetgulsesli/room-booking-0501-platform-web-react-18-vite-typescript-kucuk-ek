import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"development"',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: [
      { find: /^react$/, replacement: path.resolve(__dirname, 'node_modules/react/cjs/react.development.js') },
      { find: /^react-dom$/, replacement: path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom.development.js') },
      { find: /^react-dom\/test-utils$/, replacement: path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom-test-utils.development.js') },
      { find: /^react\/jsx-runtime$/, replacement: path.resolve(__dirname, 'node_modules/react/cjs/react-jsx-runtime.development.js') },
      { find: /^react\/jsx-dev-runtime$/, replacement: path.resolve(__dirname, 'node_modules/react/cjs/react-jsx-dev-runtime.development.js') },
    ],
  },
  optimizeDeps: {
    include: ['@testing-library/react', '@testing-library/jest-dom'],
  },
});
