## Use Presets in [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#readme)

```ts
// in vite.config.ts
import { defineConfig } from 'vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { presets } from '@chengdx/[package]'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        presets,
      ],
    }),
  ],
})
```