import { describe, expect, it } from 'vitest'
import { toArray } from '.'

describe('array like', () => {
  const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  }
  const array = [2, 3, 4]
  const a = {
    length: 5,
    0: 2,
    1: 3,
    4: 4,
  }
  it('should works', () => {
    const result = toArray(arrayLike)
    expect(result).toEqual([2, 3, 4])

    const result2 = toArray(array)
    expect(result2).toEqual([2, 3, 4])

    expect(toArray(a)).toEqual([2, 3, undefined, undefined, 4])
  })
})
