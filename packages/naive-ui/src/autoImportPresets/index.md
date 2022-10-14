## autoImportPresets
> Api presets of `@chengdx/naive-ui` for unplugin [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#readme)

```ts
// in vite.config.ts
import { defineConfig } from 'vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { autoImportApi } from '@chengdx/naive-ui'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        autoImportApi,
      ],
    }),
  ],
})

```