import { describe, expect, it } from 'vitest'
import { createArray } from '.'

describe('default-export-resolver', () => {
  it('should equal', () => {
    const arr = createArray(3, i => i)
    expect(arr).toEqual([0, 1, 2])
  })
})
