import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    target: "es2018",
    outDir: '../priv/static',
    emptyOutDir: true,
    polyfillDynamicImport: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: "src/main.ts"
      }
    }
  },
  plugins: [svelte()]
})
