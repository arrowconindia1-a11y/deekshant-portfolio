import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths work on a root domain and on GitHub Pages project URLs.
  base: './',
  // Permit the hosted workspace preview without opening the server to every host.
  server: { allowedHosts: ['.e2b.app'] },
  preview: { allowedHosts: ['.e2b.app'] },
});
