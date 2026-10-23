import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// `npm run build` -> normal static build in /dist (what GitHub Pages deploys)
// `npm run build:single` -> one self-contained HTML file in /dist-single (handy for previews)
export default defineConfig(({ mode }) => ({
  base: "/",
  plugins: [react(), ...(mode === "single" ? [viteSingleFile()] : [])],
  build: mode === "single" ? { outDir: "dist-single", copyPublicDir: false } : { outDir: "dist" },
  server: { port: 8080 },
}));
