import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import { get } from './scripts/getPackages'

export default defineConfig(async () => {
  const alias = Object.fromEntries((await get()).map(
    pkg => [pkg.manifest.name!, resolve(pkg.dir, 'src')],
  ))

  return {
    test: {
      passWithNoTests: true,
      watch: false,
    },
    resolve: {
      alias,
    },
  }
})
