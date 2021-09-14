import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "^/users/.*": {
        target: "https://dev-classorganizer.herokuapp.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users^\/^\.*/, ""),
      },
      "^/classes/.*": {
        target: "https://dev-classorganizer.herokuapp.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/classes^\/^\.*/, ""),
      },
    },
  },
});
