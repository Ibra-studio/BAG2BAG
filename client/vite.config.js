// https://vite.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcssMotion from "tailwindcss-motion";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Remplace __dirname par import.meta.url
export default defineConfig({
  // @ts-ignore
  plugins: [react(), svgr(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
