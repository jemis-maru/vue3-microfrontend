import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        microfrontend1: 'http://localhost:5001/assets/remoteEntry.js',
        microfrontend2: 'http://localhost:5002/assets/remoteEntry.js',
        // Add more microfrontends as needed
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
