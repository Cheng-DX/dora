import { describe, expect, it } from 'vitest'
import { resolveMatch, resolveMatches } from '.'

describe('match test', () => {
  const a = true
  const b = (path: string) => path.startsWith('a')
  const c = /^a/
  it('should be true', () => {
    expect(resolveMatch(a)).toBe(true)
  })
  it('should be called', () => {
    expect(resolveMatch(b, 'a_1')).toBe(true)
    expect(resolveMatch(b, 'b_1')).toBe(false)
  })
  it('should be tested', () => {
    expect(resolveMatch(c, 'a_1')).toBe(true)
    expect(resolveMatch(c, 'b_1')).toBe(false)
  })
})

describe('matches test', () => {
  const a = true
  const b = (path: string) => path.startsWith('a')
  const c = /^a/

  it('should be resolved', () => {
    expect(resolveMatches([a, b, c], 'a_1')).toBe(true)
    expect(resolveMatches([a, b, c], 'b_1')).toBe(false)
    expect(resolveMatches(a)).toBe(true)
  })
})
