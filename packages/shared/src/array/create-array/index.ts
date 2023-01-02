function createArray(length: number): undefined[]
function createArray<T>(length: number, mapFn: (i: number) => T): T[]

function createArray<T>(length: number, mapFn?: (i: number) => T) {
  return Array.from({ length }, (_, i) => mapFn?.(i))
}

export { createArray }
