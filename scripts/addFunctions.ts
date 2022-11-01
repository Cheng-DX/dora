import fs from 'fs'
import { getExportsRuntime } from 'pkg-exports'
import { formatNaming } from '@chengdx/shared'
import consola from 'consola'
import { getPackages } from './getPackages'

const packages = getPackages(pkg => pkg !== '@chengdx/default-export-resolver')

packages.forEach(async (pkg) => {
  const exports: string[] = await getExportsRuntime(pkg)
  const url = `packages/${pkg.split('/').pop()}`
  const content = fs.readFileSync(`${url}/README.md`).toString()
  const dirs = fs.readdirSync(`${url}/src`).map((dir) => {
    const isDirectory = fs.statSync(`${url}/src/${dir}`).isDirectory()
    return isDirectory && dir !== 'presets' ? formatNaming(dir, 'kebab').result : ''
  }).filter(dir => dir)

  const startTag = '<!-- FUNCTIONS START -->\n'
  const start = content.indexOf(startTag) + startTag.length
  const endTag = '<!-- FUNCTIONS END -->'
  const end = content.indexOf(endTag)

  const path = (func: string) => {
    const kebab = formatNaming(func, 'kebab').result
    return dirs.includes(kebab)
      ? `(src/${kebab}/index.md)`
      : ''
  }
  const functions = `${exports.map(func => `- [${func}]${path(func)}`).join('\n')}\n`
  fs.writeFileSync(`${url}/README.md`, content.slice(0, start) + functions + content.slice(end))
  consola.success(`Resolved ${pkg}`)
})
