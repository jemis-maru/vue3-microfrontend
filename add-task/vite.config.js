import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'addtask', // Unique name for the microfrontend
      filename: 'remoteEntry.js',
      exposes: {
        './AddTaskApp': './src/App.vue', // Expose components or modules
      },
      shared: ['vue'], // Shared dependencies
    }),
  ],
  preview: {
    port: 5003, // Port for the host application
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
