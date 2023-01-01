import fs from 'fs'
import { resolve } from 'path'
import type { MaybeCallable } from '@chengdx/shared'
import { indexOfFirstMacthes, resolveCallable } from '@chengdx/shared'

export function getFile(
  filepath: string,
  options?: {
    rootDir?: string
    createOnNotExisted?: boolean
    template?: MaybeCallable<string>
    openOnReturn: true
  }
): { path: string; existed: boolean; filename: string; dirpath: string; content: string }

export function getFile(
  filepath: string,
  options?: {
    rootDir?: string
    createOnNotExisted?: boolean
    template?: MaybeCallable<string>
    openOnReturn: false
  }
): { path: string; existed: boolean; filename: string; dirpath: string }

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
    /**
     * Open file
     */
    openOnReturn?: boolean
    /**
     * encoding
     */
    encoding?: BufferEncoding
  },
) {
  const { createOnNotExisted = true, template = '', rootDir = '', openOnReturn = false, encoding = 'utf-8' } = options || {}

  let existed = true
  const indexOfFirstNonePathChar = indexOfFirstMacthes(filepath, char => !['/', '.', '\\'].includes(char))
  const resolvedPath = indexOfFirstNonePathChar === -1 ? filepath : filepath.slice(indexOfFirstNonePathChar, filepath.length)
  const isNested = resolvedPath.split('/').length > 1

  const dirpath = isNested ? `${rootDir}/${resolvedPath.split('/').slice(0, -1).join('/')}` : ''
  const filename = resolvedPath.split('/').pop() ?? 'resolvedPath'
  const fullPath = resolve(dirpath, filename)
  let content: string

  if (!fs.existsSync(fullPath)) {
    if (!createOnNotExisted) { existed = false }

    else if (isNested) {
      fs.mkdirSync(dirpath, { recursive: true })
      // eslint-disable-next-line no-console
      console.log(`Created directory: ${dirpath}`)
    }
    content = resolveCallable(template)
    fs.writeFileSync(fullPath, content, {
      encoding,
    })
  }
  else {
    content = fs.readFileSync(fullPath, encoding)
  }

  return {
    path: fullPath,
    existed,
    filename,
    dirpath,
    ...(openOnReturn ? { content } : {}),
  }
}
