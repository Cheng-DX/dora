import fs from 'fs'
import consola from 'consola'
import { dependencies } from '../package.json'

export type Package = keyof typeof dependencies
export function getPackages(filter?: (pkg: Package) => boolean) {
  return (Object.keys(dependencies) as Package[]).filter(filter ?? (() => true))
}

export function getFile(
  filepath: string,
  options?: {
    filter?: (pkg: Package) => boolean
    createOnNotExisted?: boolean
  },
) {
  const { filter, createOnNotExisted = true } = options || {}
  return getPackages(filter).map((pkg) => {
    let existed = true
    const resolvedPath = filepath.startsWith('/') ? filepath.slice(1) : filepath
    const hasDir = resolvedPath.split('/').length > 1
    const dirName = `packages/${pkg.split('/').pop()}/${resolvedPath.split('/').slice(0, -1).join('/')}`
    const fileName = resolvedPath.split('/').pop()
    const fullPath = `${dirName}/${fileName}`

    if (!fs.existsSync(fullPath)) {
      if (!createOnNotExisted) { existed = false }

      else if (hasDir) {
        fs.mkdirSync(dirName, { recursive: true })
        consola.info(`Created ${filepath} for ${pkg}`)
      }

      fs.writeFileSync(fullPath, '')
    }
    return {
      pkg,
      path: fullPath,
      existed,
    }
  })
}
