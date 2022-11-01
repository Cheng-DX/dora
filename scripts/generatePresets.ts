import fs from 'fs'
import { getExportsRuntime } from 'pkg-exports'
import consola from 'consola'
import { dependencies } from '../package.json'

const excludedPackages = ['@chengdx/default-export-resolver']
const resolvedPackages = Object.keys(dependencies).filter(
  pkg => !excludedPackages.includes(pkg),
)

resolvedPackages.forEach(async (pkg) => {
  const exports = await getExportsRuntime(pkg)
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
