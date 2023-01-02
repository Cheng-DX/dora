export interface ArrayLike<T> {
  length: number
  [key: number]: T
}
export function toArray<T>(arrayLike: ArrayLike<T>): T[] {
  return Array.from(arrayLike)
}

export type MaybeArray<T> = T | T[]
export function resolveArray<T>(array: MaybeArray<T>): T[] {
  return Array.isArray(array) ? array : [array]
}
