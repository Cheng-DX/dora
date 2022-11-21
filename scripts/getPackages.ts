import fs from 'fs'
import consola from 'consola'
import { dependencies } from '../package.json'

export type Package = keyof typeof dependencies
export function getPackages(filter?: (pkg: Package) => boolean) {
  return (Object.keys(dependencies) as Package[]).filter(filter ?? (() => true))
}

export function getOrCreateFile(
  filepath: string,
  filter?: (pkg: Package) => boolean,
) {
  return getPackages(filter).map((pkg) => {
    const resolvedPath = filepath.startsWith('/') ? filepath : `/${filepath}`
    const fullPath = `packages/${pkg.split('/').pop()}${resolvedPath}`

    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true })
      consola.info(`Created ${filepath} for ${pkg}`)
    }
    return {
      pkg,
      path: fullPath,
    }
  })
}
