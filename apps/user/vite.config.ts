import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import federation from "@originjs/vite-plugin-federation";

import { name, dependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name,
      filename: "remoteEntry.js",
      exposes: {
        "./render": "./src/renderApp.ts",
        "./PublishersSection":
          "./src/components/PublishersSection/PublishersSection.svelte",
      },
      shared: dependencies,
    }),
  ],
  base: "http://localhost:3003/",
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
