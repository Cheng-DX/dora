import { capitalize, isUpperCase } from '../handle-char'
import type { Format } from './types'

export function format(
  name: string,
  format: Format,
  options?: { ignoreNonLetters?: boolean },
): { result: string; parts: string[]; type: Format } {
  if (!name) {
    return {
      result: '',
      parts: [],
      type: 'camel',
    }
  }
  const nameFormat = whichFormat(name)
  const { ignoreNonLetters = true } = options || {}
  const parts = intoParts(name, nameFormat)

  if (nameFormat === format) {
    return {
      result: name,
      parts,
      type: nameFormat,
    }
  }

  let result = name
  switch (format) {
    case 'camel':
      result = parts.map((part, i) => i === 0 ? part : capitalize(part, { ignoreNonLetters })).join('')
      break
    case 'pascal':
      result = parts.map(part => capitalize(part, { ignoreNonLetters })).join('')
      break
    case 'snake':
      result = parts.join('_')
      break
    case 'kebab':
      result = parts.join('-')
      break
    default: break
  }

  return {
    result,
    parts,
    type: nameFormat,
  }
}

export function intoParts(name: string, nameFormat: Format): string[] {
  switch (nameFormat) {
    case 'camel':
    case 'pascal':
      return name.split(/(?=[A-Z])/).map(s => s.toLowerCase())
    case 'snake':
      return name.split(/(?=_)/).map(s => s.replace(/_/g, '').toLowerCase())
    case 'kebab':
      return name.split(/(?=-)/).map(s => s.replace(/-/g, '').toLowerCase())
    default:
      return [name]
  }
}

export function whichFormat(name: string): Format {
  if (!name)
    throw new Error('name is required')
  if (name.includes('_') && name.split('_').every(s => s.length > 0))
    return 'snake'
  if (name.includes('-') && name.split('-').every(s => s.length > 0))
    return 'kebab'
  let i = 0
  while (i < name.length) {
    if (isUpperCase(name[i]))
      return 'pascal'
    i++
  }
  return 'camel'
}
