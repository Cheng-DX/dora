export function createArray<T>(length: number, mapFn?: (i: number) => T) {
  return Array.from({ length }, (_, i) => mapFn?.(i))
}
