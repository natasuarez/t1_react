
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'Mi primer PWA',
        short_name: 'MyAppPWA',
        description: 'La mas fantastica aplicacion de PWA',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',

        screenshots: [
          {
            src: "pwa png.png",
            sizes: "1164x655",
            type: "image/png",
            form_factor: "narrow"
          },

          {
            src: "pwa png.png",
            sizes: "1164x655",
            type: "image/png",
            form_factor: "wide"
          },

        ],
        icons: [
          {
            src: 'img192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
