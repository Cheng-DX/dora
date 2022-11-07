import fs from 'fs/promises'
import { getExportsRuntime } from 'pkg-exports'
import { formatNaming, replaceSubstring } from '@chengdx/shared'
import consola from 'consola'
import { getPackages } from './getPackages'

const packages = getPackages(pkg => pkg !== '@chengdx/default-export-resolver')

packages.forEach(async (pkg) => {
  const exports: string[] = await getExportsRuntime(pkg)
  const url = `packages/${pkg.split('/').pop()}`
  const content = (await fs.readFile(`${url}/README.md`)).toString()
  const dirs = await fs.readdir(`${url}/src`)
  const fotmattedDirs = await Promise.all(
    dirs
      .map(async (dir) => {
        const isDirectory = (await fs.stat(`${url}/src/${dir}`)).isDirectory()
        return isDirectory ? formatNaming(dir, 'kebab').result : ''
      })
      .filter(async (dir) => {
        return await dir
      }),
  )

  const startTag = '<!-- FUNCTIONS START -->\n'
  const start = content.indexOf(startTag) + startTag.length
  const endTag = '<!-- FUNCTIONS END -->'
  const end = content.indexOf(endTag)

  const path = (func: string) => {
    const kebab = formatNaming(func, 'kebab').result
    return fotmattedDirs.includes(kebab)
      ? `- [${func}](src/${kebab}/index.md)`
      : `- ${func}`
  }
  const functions = `${exports.map(func => path(func)).join('\n')}\n`
  await fs.writeFile(`${url}/README.md`, replaceSubstring(content, start, end, functions))
  consola.success(`Resolved ${pkg}`)
})
