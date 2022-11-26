import fs from 'fs'
import { getExportsRuntime } from 'pkg-exports'
import consola from 'consola'
import type { Package } from './getPackages'
import { getFile } from './getPackages'

const exclued: Package[] = [
  '@chengdx/default-export-resolver',
  '@chengdx/defa',
]

getFile('/src/presets/index.ts', {
  filter: pkg => !exclued.includes(pkg),
}).forEach(async ({ pkg, path }) => {
  const exports: string[] = await getExportsRuntime(pkg)
  fs.writeFileSync(path, createPresetsObject(pkg, exports))
  consola.success(`Generated presets for ${pkg}`)
})

function createPresetsObject(packageName: string, exports: string[]) {
  return `export default {
  '${packageName}': [
${exports.map(fn => `    '${fn}',`).join('\n')}
  ],
}
`
}
