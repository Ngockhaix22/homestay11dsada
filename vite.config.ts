import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
    allowedHosts: ["homestay11dsada.onrender.com"], // ✅ chỉ cần dòng này nếu chạy dev ngoài localhost
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()], // ❌ bỏ expressPlugin() ra, chỉ giữ React
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));
