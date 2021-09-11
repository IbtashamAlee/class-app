import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Using the proxy instance
      "^/.*": {
        target: "https://dev-classorganizer.herokuapp.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
