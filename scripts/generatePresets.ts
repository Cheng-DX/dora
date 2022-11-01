import fs from 'fs'
import { getExportsRuntime } from 'pkg-exports'
import consola from 'consola'
import { getPackages } from './getPackages'

const packages = getPackages(pkg => pkg !== '@chengdx/default-export-resolver')

packages.forEach(async (pkg) => {
  const exports: string[] = await getExportsRuntime(pkg)
  fs.writeFileSync(
    `packages/${pkg.split('/').pop()}/src/presets/index.ts`,
    createPresetsObject(pkg, exports),
  )
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
