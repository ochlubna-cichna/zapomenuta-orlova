import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 750,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // vue-cli's webpack config resolved extensionless imports of .vue
    // files by default; Vite does not, so add it back explicitly.
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@/assets/global.sass"\n',
      },
    },
  },
  plugins: [
    vue(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.js',
      injectRegister: false,
      manifest: {
        name: 'Zapomenutá Orlová',
        short_name: 'Zapomenutá Orlová',
        start_url: '/',
        background_color: '#232b2b',
        theme_color: '#fcba03',
      },
      injectManifest: {
        globIgnores: ['**/_redirects', '**/tiles.js'],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
