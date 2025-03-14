import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Define cómo se registra el service worker
      manifest: {
        name: "StreakMaster",
        short_name: "StreakMaster",
        description: "Track your habits with ease",
        theme_color: "#000000",
        icons: [
          {
            src: "icons/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
