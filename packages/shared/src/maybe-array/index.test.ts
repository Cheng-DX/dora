import { describe, expect, it } from 'vitest'
import { type MaybeArray, resolveArray } from '.'

describe('maybeArray', () => {
  it('should return an array', () => {
    const a: MaybeArray<string> = 'a'
    const b: MaybeArray<string> = ['a', 'b']

    expect(resolveArray(a)).toEqual(['a'])
    expect(resolveArray(b)).toEqual(['a', 'b'])
  })
})
