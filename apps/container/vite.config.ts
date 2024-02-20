import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

import { dependencies, name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: name,
      remotes: {
        "@semicolon/user": "http://localhost:3003/assets/remoteEntry.js",
        "@semicolon/post": "http://localhost:3002/assets/remoteEntry.js",
        "@semicolon/podcast": "http://localhost:3001/assets/remoteEntry.js",
        "@semicolon/notification": "http://localhost:3004/remoteEntry.js",
      },
      shared: dependencies,
    }),
  ],
  server: {
    port: 3000,
    cors: false,
  },
  preview: {
    port: 3000,
  },
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
