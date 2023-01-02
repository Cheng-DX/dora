export interface ArrayLike<T> {
  length: number
  [key: number]: T
}

export function toArray<T>(arrayLike: ArrayLike<T>): T[] {
  return Array.from(arrayLike)
}
