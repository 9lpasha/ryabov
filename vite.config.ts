import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/ryabov/",
  plugins: [react()],
  resolve: {
    alias: {
      forms: path.resolve(__dirname, "src/forms"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
});
