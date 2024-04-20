// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all available network interfaces
    port: 5173, // Set your desired port
  },
});
