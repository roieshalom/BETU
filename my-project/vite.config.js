import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/BETU/",
  server: {
    port: 5173, // Set a fixed port
    strictPort: true, // Prevents switching to another port
  },
});
