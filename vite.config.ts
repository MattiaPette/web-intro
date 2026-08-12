import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import type { ManifestOptions } from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> = {
  name: 'Web Intro — React + MUI',
  short_name: 'Web Intro',
  description:
    'Template riutilizzabile: React + TypeScript + Material UI (MUI), mobile-ready e installabile come PWA.',
  lang: 'it',
  theme_color: '#6366f1',
  background_color: '#ffffff',
  display: 'standalone',
  scope: '/',
  start_url: '/',
  icons: [
    { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
    { src: '/maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png'],
      manifest,
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        navigateFallbackDenylist: [/^\/404/],
      },
    }),
  ],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'mui', test: /node_modules[\\/]@mui[\\/]|node_modules[\\/]@emotion[\\/]/ },
            { name: 'vendor', test: /node_modules[\\/]/ },
          ],
        },
      },
    },
  },
})