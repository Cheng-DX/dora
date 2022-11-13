import { assert, describe, expect, it } from 'vitest'
import defa from '.'

describe('defuWithArray', () => {
  const r = defa([1, 2, 3], [4, 5, 6])
  it('should works', () => {
    expect(r).toEqual([1, 2, 3])
  })
  it('should be array', () => {
    assert(Array.isArray(r))
  })
})
