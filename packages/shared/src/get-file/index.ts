import fs from 'fs'
import { resolve } from 'path'
import type { MaybeCallable } from '..'
import { indexOfFirstMacthes, resolveCallable } from '..'

export function getFile(
  filepath: string,
  options?: {
    /**
     * Root directory
     * @default working directory
     */
    rootDir?: string
    /**
     * Should create it while traget file not exists
     * @default true
     */
    createOnNotExisted?: boolean
    /**
     * Template string while create new file
     * @default ''
     */
    template?: MaybeCallable<string>
  },
) {
  const { createOnNotExisted = true, template = '', rootDir = '' } = options || {}

  let existed = true
  const indexOfFirstNonePathChar = indexOfFirstMacthes(filepath, char => !['/', '.', '\\'].includes(char))
  const resolvedPath = indexOfFirstNonePathChar === -1 ? filepath : filepath.slice(indexOfFirstNonePathChar, filepath.length)
  const isNested = resolvedPath.split('/').length > 1

  const dirpath = isNested ? `${rootDir}/${resolvedPath.split('/').slice(0, -1).join('/')}` : ''
  const filename = resolvedPath.split('/').pop() ?? 'resolvedPath'
  const fullPath = resolve(dirpath, filename)

  if (!fs.existsSync(fullPath)) {
    if (!createOnNotExisted) { existed = false }

    else if (isNested) {
      fs.mkdirSync(dirpath, { recursive: true })
      // eslint-disable-next-line no-console
      console.log(`Created directory: ${dirpath}`)
    }

    fs.writeFileSync(fullPath, resolveCallable(template))
  }

  return {
    path: fullPath,
    existed,
    filename,
    dirpath,
  }
}
