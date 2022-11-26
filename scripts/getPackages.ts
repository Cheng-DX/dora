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
    const resolvedPath = filepath.startsWith('/') ? filepath : `/${filepath}`
    const fullPath = `packages/${pkg.split('/').pop()}${resolvedPath}`

    if (!fs.existsSync(fullPath)) {
      if (!createOnNotExisted) {
        existed = false
      }
      else {
        // FIXME: wrong reaction when the path is a file
        fs.mkdirSync(fullPath, { recursive: true })
        consola.info(`Created ${filepath} for ${pkg}`)
      }
    }
    return {
      pkg,
      path: fullPath,
      existed,
    }
  })
}
