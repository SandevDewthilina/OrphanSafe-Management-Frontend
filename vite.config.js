///<reference types="vitest"/>
///<reference types="vite/client"/>

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "OrphanSafe",
        short_name: "orphansafe",
        description: "orphansafe child protection authority",
        start_url: "/",
        src_url: ".",
        icons: [
          {
            src: "/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        theme_color: "#005ed4",
        background_color: "#FFFFFF",
        display: "standalone",
        orientation: "portrait",
      },
      strategies: "injectManifest",
      injectRegister: null,
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
      },
      workbox: {
        sourcemap: true,
      },
    }),
    // VitePWA({
    //   manifest: {
    //     name: "OrphanSafe",
    //     short_name: "orphansafe",
    //     description: "orphansafe child protection authority",
    //     start_url: "/",
    //     src_url: ".",
    //     icons: [
    //       {
    //         src: "/icons/manifest-icon-192.maskable.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //         purpose: "any",
    //       },
    //       {
    //         src: "/icons/manifest-icon-192.maskable.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //         purpose: "maskable",
    //       },
    //       {
    //         src: "/icons/manifest-icon-512.maskable.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any",
    //       },
    //       {
    //         src: "/icons/manifest-icon-512.maskable.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "maskable",
    //       },
    //     ],
    //     theme_color: "#005ed4",
    //     background_color: "#FFFFFF",
    //     display: "standalone",
    //     orientation: "portrait",
    //   },
    //   strategies: "injectManifest",
    //   registerType: "autoUpdate",
    //   devOptions: {
    //     enabled: true,
    //     type: "module",
    //     /* other options */
    //   },
    //   skipWaiting: true,
    //   injectManifest: {
    //     injectionPoint: undefined,
    //   },
    // }),
    // VitePWA({
    //   manifest: {
    //     name: "OrphanSafe",
    //     short_name: "orphansafe",
    //     description: "orphansafe child protection authority",
    //     src_url: ".",
    //     icons: [
    //       {
    //         src: "/icons/manifest-icon-192.maskable.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //         purpose: "any",
    //       },
    //       {
    //         src: "/icons/manifest-icon-192.maskable.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //         purpose: "maskable",
    //       },
    //       {
    //         src: "/icons/manifest-icon-512.maskable.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any",
    //       },
    //       {
    //         src: "/icons/manifest-icon-512.maskable.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "maskable",
    //       },
    //     ],
    //     theme_color: "#005ed4",
    //     background_color: "#FFFFFF",
    //     display: "standalone",
    //     orientation: "portrait",
    //   },
    //   registerType: "autoUpdate",
    //   skipWaiting: true,
    //   devOptions: {
    //     enabled: true,
    //   },
    //   workbox: {
    //     runtimeCaching: [
    //       {
    //         urlPattern: ({ url }) => {
    //           return true;
    //         },
    //         handler: "NetworkFirst",
    //       },
    //     ],
    //   },
    // }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api/users": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/api/notifications": {
        target: "http://localhost:5010",
        changeOrigin: true,
      },
      "/api/case": {
        target: "http://localhost:5030",
        changeOrigin: true,
      },
      "/api/profile": {
        target: "http://localhost:5020",
        changeOrigin: true,
      },
      "/api/admin": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true
  }
});
