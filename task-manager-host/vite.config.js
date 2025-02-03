import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host",
      remotes: {
        tasklist: "http://localhost:5001/assets/remoteEntry.js",
        taskdetail: "http://localhost:5002/assets/remoteEntry.js",
        addtask: "http://localhost:5003/assets/remoteEntry.js",
        // Add more microfrontends as needed
      },
      exposes: {
        "./store": "./src/store/index.js",
        "./taskStore": "./src/store/taskStore.js",
        "./routerStore": "./src/store/routerStore.js",
      },
      // Shared dependencies to avoid duplicate bundles and ensuring version consistency
      shared: ["vue", "pinia", "vue-router"],
    }),
  ],
  preview: {
    port: 5000, // Port for the host application
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
