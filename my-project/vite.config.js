import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/fragenkatalog/",  // ✅ This must match your repo name exactly!
  plugins: [react()],
  server: {
    port: 5173,   // Keeps localhost fixed
    strictPort: true  // Prevents switching ports
  },
  build: {
    outDir: "dist",
  }
});
