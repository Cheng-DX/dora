import fs from 'fs'
import { resolve } from 'path'
import { getExportsRuntime } from 'pkg-exports'
import consola from 'consola'
import { getFile as file } from '@chengdx/fs'
import { get } from './getPackages'

const exclued: string[] = [
  '@chengdx/default-export-resolver',
  '@chengdx/defa',
]

async function generate() {
  const pkgs = await get(pkg => !exclued.includes(pkg.manifest.name!))

  pkgs.forEach(async ({ dir, manifest: { name } }) => {
    const exports: string[] = await getExportsRuntime(name!)
    if (exports.length === 0)
      return
    const { path } = file(resolve(dir, 'src/presets/index.ts'))
    fs.writeFileSync(path, createPresetsObject(name!, exports))
    consola.success(`Generated presets for ${name!}`)
  })
}
generate()

function createPresetsObject(packageName: string, exports: string[]) {
  return `export default {
  '${packageName}': [
${exports.filter(name => name !== 'presets').map(fn => `    '${fn}',`).join('\n')}
  ],
}
`
}
