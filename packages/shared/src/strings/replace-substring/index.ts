/**
 * replace string between two indexes with replacement
 */
export function replaceSubstring(src: string, from: number, to: number, replacement: string): string

/**
 * replace string from index `from` to `from` + `replacement.length` with replacement
 */
export function replaceSubstring(src: string, from: number, replacement: string): string

export function replaceSubstring(
  src: string,
  from: number,
  arg3: string | number,
  arg4?: string,
) {
  if (typeof arg3 === 'number')
    return src.slice(0, from) + arg4 + src.slice(arg3)
  else
    return src.slice(0, from) + arg3 + src.slice(from + arg3.length)
}
