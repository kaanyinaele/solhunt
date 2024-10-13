import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Ensure all assets are served relative to the app's root
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@emotion/core": "@emotion/react",
      "@emotion/styled": "@emotion/styled",
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
});
