import react from '@vitejs/plugin-react';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: { host: '0.0.0.0', port: 8000 },
  clearScreen: false,
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
});
