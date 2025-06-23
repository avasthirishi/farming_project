import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() ,tailwindcss(),],
   assetsInclude: ['**/*.html'],
  // Removed assetsInclude for HTML files, as Vite's default behavior for index.html
  // in the 'public' directory is typically correct and doesn't require this.
  // Including it can sometimes lead to conflicts where Vite tries to parse index.html
  // as a JavaScript module, causing the "invalid JS syntax" error.

  // Using '/' as the base path, which is the default and generally recommended
  // for single-page applications deployed at the root of a domain.
  base: '/',
});
