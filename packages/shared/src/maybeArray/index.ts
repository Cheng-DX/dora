export type MaybeArray<T> = T | T[]

export function resolveArray<T>(array: MaybeArray<T>): T[] {
  return Array.isArray(array) ? array : [array]
}
