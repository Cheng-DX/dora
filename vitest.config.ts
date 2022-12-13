import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    passWithNoTests: true,
    watch: false,
  },
  resolve: {
    alias: {
      '@chengdx/components': resolve(__dirname, 'packages/components/src'),
      '@chengdx/composables': resolve(__dirname, 'packages/composables/src'),
      '@chengdx/defa': resolve(__dirname, 'packages/defa/src'),
      '@chengdx/default-export-resolver': resolve(__dirname, 'packages/default-export-resolver/src'),
      '@chengdx/maybe-ref': resolve(__dirname, 'packages/maybe-ref/src'),
      '@chengdx/shared': resolve(__dirname, 'packages/shared/src'),
      '@chengdx/use-echarts': resolve(__dirname, 'packages/use-echarts/src'),
    },
  },
})
