import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/BETU/",  // Ensure this matches your GitHub repo name
  server: {
    port: 5173,   // Keeps localhost fixed
    strictPort: true  // Prevents switching ports
  },
  build: {
    outDir: "dist",
  }
});
