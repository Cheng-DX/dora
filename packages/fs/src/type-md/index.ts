import fs from 'fs/promises'

export async function typeMD<M = {}>(path: string) {
  const raw = await fs.readFile(path, 'utf-8')
  const blocks = raw.split('---')
  if (blocks.length < 3)
    return {} as M
  const m = blocks[1].trim()
  const meta = {} as any
  m.split('\n').forEach(line => {
    const [key, value] = line.split(':')
    if (key && value)
      meta[key.trim()] = resolveString(value.trim())
  })
  return meta as M
}

function resolveString(s: string): unknown {
  s = s.trim()
  if (s.match(/^[0-9]+$/))
    return Number(s)
  if (s.match(/true|false/))
    return s === 'true'
  if (s.match(/undefined/))
    return undefined
  if (s.match(/null/))
    return null
  if (s.startsWith('[') && s.endsWith(']'))
    return s.slice(1, -1).split(',').map(resolveString)
  return s
}
