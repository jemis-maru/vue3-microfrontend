import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "tasklist", // Unique name for the microfrontend
      filename: "remoteEntry.js",
      remotes: {
        "task-manager-host": "http://localhost:5000/assets/remoteEntry.js",
      },
      exposes: {
        "./TaskListApp": "./src/App.vue", // Expose components or modules
      },
      // Shared dependencies to avoid duplicate bundles and ensuring version consistency
      shared: ["vue"],
    }),
  ],
  preview: {
    port: 5001, // Port for the host application
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
