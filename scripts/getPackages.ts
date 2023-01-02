import fs from 'fs'
import consola from 'consola'
import type { MaybeCallable } from '@chengdx/shared'
import { resolveCallable } from '@chengdx/shared'
import { type Project, findWorkspacePackages } from '@pnpm/find-workspace-packages'
import { dependencies } from '../package.json'

export type Package = keyof typeof dependencies
export function getPackages(filter?: (pkg: Package) => boolean): Package[] {
  return (Object.keys(dependencies) as Package[]).filter(filter ?? (() => true))
}

export async function get(filter?: (pkg: Project) => boolean) {
  return (await findWorkspacePackages(process.cwd()))
    .filter(pkg => pkg.manifest.name?.startsWith('@chengdx'))
    .filter(filter ?? (() => true))
}

export function getFile(
  filepath: string,
  options?: {
    /**
     * Filter packages should be resolved
     */
    filter?: (pkg: Package) => boolean
    /**
     * Should create it while traget file not exists
     * @default true
     */
    createOnNotExisted?: boolean
    /**
     * Template string while create new file
     * @default ''
     */
    template?: MaybeCallable<string, [{ pkg: Package }]>
  },
) {
  const { filter, createOnNotExisted = true, template = '' } = options || {}
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

      fs.writeFileSync(fullPath, resolveCallable(template, { pkg }))
    }
    return {
      pkg,
      path: fullPath,
      existed,
    }
  })
}
