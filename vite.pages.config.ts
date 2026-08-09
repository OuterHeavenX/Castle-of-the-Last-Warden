import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  root: resolve(process.cwd(), "pages"),
  base: "/Castle-of-the-Last-Warden/",
  plugins: [react()],
  build: {
    outDir: resolve(process.cwd(), "dist-pages"),
    emptyOutDir: true,
  },
});
