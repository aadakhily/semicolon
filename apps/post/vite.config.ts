import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";

import { name, dependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name,
      filename: "remoteEntry.js",
      exposes: {
        "./render": "./src/renderApp.ts",
        "./PostsList": "./src/components/PostList/PostList.vue",
      },
      shared: dependencies,
    }),
  ],
  base: "http://localhost:3002/",
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
