import { describe, expect, it } from 'vitest'
import { replaceSubstring } from '.'

describe('replace substring', () => {
  it('should work', () => {
    expect(replaceSubstring('hello world', 6, 10, 'mars')).toEqual('hello marsd')
    expect(replaceSubstring('hello world', 6, 'mar')).toEqual('hello marld')
  })
})
