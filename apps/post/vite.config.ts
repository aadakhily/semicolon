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
      },
      shared: dependencies,
    }),
  ],
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
