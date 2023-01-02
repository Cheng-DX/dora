import type { Matcher } from '../../match'
import { match } from '../../match'

export function charMatches(matcher: Matcher<[string]>) {
  return (char: string) => {
    if (!char || char.length !== 1)
      return false
    return match(matcher, char)
  }
}

export const isUpperCase = charMatches(/[A-Z]/)
export const isLowerCase = charMatches(/[a-z]/)
export const isNumber = charMatches(/[0-9]/)
export const isSpecial = charMatches(/[^a-zA-Z0-9]/)
export const isLetter = charMatches(/[a-zA-Z]/)

export function indexOfFirstMacthes(str: string, matcher: Matcher<[string]>) {
  return Array.from(str).findIndex(charMatches(matcher))
}

export function indexOfFirstLetter(str: string) {
  return indexOfFirstMacthes(str, isLetter)
}

export function capitalize(str: string, options?: {
  /**
   * @default false
   */
  ignoreNonLetters: boolean
}) {
  if (!str || str.length === 0)
    return ''
  if (options?.ignoreNonLetters) {
    const index = indexOfFirstLetter(str)
    if (index === -1)
      return str
    return str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1)
  }
  return str[0].toUpperCase() + str.slice(1)
}
