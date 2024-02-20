import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import federation from "@originjs/vite-plugin-federation";

import { name, dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    solid(),
    federation({
      name,
      filename: "remoteEntry.js",
      exposes: {
        "./render": "./src/renderApp.tsx",
        "./PodcastSection":
          "./src/components/PodcastSection/PodcastSection.tsx",
      },
      shared: dependencies,
    }),
  ],
  base: "http://localhost:3001/",
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
