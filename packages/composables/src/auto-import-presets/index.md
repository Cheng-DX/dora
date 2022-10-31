## autoImportPresets
> Presets of `composables` for unplugin [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#readme)

```ts
// in vite.config.ts
import { defineConfig } from 'vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { autoImportPresets } from '@chengdx/composables'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        autoImportPresets,
      ],
    }),
  ],
})

```