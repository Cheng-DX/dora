import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import { presets as autoImportPresets } from '@chengdx/composables'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      configFile: './uno.config.ts',
    }),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        autoImportPresets,
      ],
      dirs: [
        'src/composables/**',
      ],
    }),
    AutoImportComponents({
      dts: true,
      extensions: ['vue', 'ts', 'tsx'],
      dirs: [],
      importPathTransform: path => path.replace(/\.[tj]sx?$/, ''),
      resolvers: [
        NaiveUiResolver(),
      ],
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
})
