import fs from 'fs'
import { getExportsRuntime } from 'pkg-exports'
import consola from 'consola'
import type { Package } from './getPackages'
import { getPackages } from './getPackages'

const exclued: Package[] = [
  '@chengdx/default-export-resolver',
  '@chengdx/defa',
]
const packages = getPackages(pkg => !exclued.includes(pkg))

packages.forEach(async (pkg) => {
  const exports: string[] = await getExportsRuntime(pkg)
  const path = `packages/${pkg.split('/').pop()}/src/presets/index.ts`

  // is path is not exists, create it
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path.replace('/index.ts', ''), { recursive: true })
    consola.info(`Created presets/index.ts for ${pkg}`)
  }

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
