export function charIs(regex: RegExp) {
  return (char: string) => {
    if (!char || char.length !== 1)
      return false
    return regex.test(char)
  }
}

export const isUpperCase = charIs(/[A-Z]/)
export const isLowerCase = charIs(/[a-z]/)
export const isNumber = charIs(/[0-9]/)
export const isSpecial = charIs(/[^a-zA-Z0-9]/)
export const isLetter = charIs(/[a-zA-Z]/)

export function indexOfFirstLetter(str: string) {
  for (let i = 0; i < str.length; i++) {
    if (isLetter(str[i]))
      return i
  }
  return -1
}

export function capitalize(str: string, options?: {
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
