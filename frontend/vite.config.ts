import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Needed for network access
    allowedHosts: [
      'localhost',
      '.ngrok-free.app', // Allow all ngrok subdomains
    ],
  },
});