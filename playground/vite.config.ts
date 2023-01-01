import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'
import { defaultExportResolver } from '@chengdx/default-export-resolver'

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
        defaultExportResolver([
          { name: 'VChart', from: 'vue-echarts' },
        ]),
      ],
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src', import.meta.url)),
      '@chengdx/components': fileURLToPath(new URL('../packages/components/src', import.meta.url)),
      '@chengdx/composables': fileURLToPath(new URL('../packages/composables/src', import.meta.url)),
      '@chengdx/defa': fileURLToPath(new URL('../packages/defa/src', import.meta.url)),
      '@chengdx/default-export-resolver': fileURLToPath(new URL('../packages/default-export-resolver/src', import.meta.url)),
      '@chengdx/maybe-ref': fileURLToPath(new URL('../packages/maybe-ref/src', import.meta.url)),
      '@chengdx/shared': fileURLToPath(new URL('../packages/shared/src', import.meta.url)),
      '@chengdx/use-echarts': fileURLToPath(new URL('../packages/use-echarts/src', import.meta.url)),
      '@chengdx/naive-ui': fileURLToPath(new URL('../packages/naive-ui/src', import.meta.url)),
      '@chengdx/fs': fileURLToPath(new URL('../packages/fs/src', import.meta.url)),
    },
  },
})
