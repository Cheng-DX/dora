import { describe, expect, it } from 'vitest'
import { match, matchEvery, matchSome } from '.'

describe('match test', () => {
  const a = true
  const b = (path: string) => path.startsWith('a')
  const c = /^a/
  it('should be true', () => {
    expect(match(a)).toBe(true)
  })
  it('should be called', () => {
    expect(match(b, 'a_1')).toBe(true)
    expect(match(b, 'b_1')).toBe(false)
  })
  it('should be tested', () => {
    expect(match(c, 'a_1')).toBe(true)
    expect(match(c, 'b_1')).toBe(false)
  })
})

describe('match every test', () => {
  const a = true
  const b = (path: string) => path.startsWith('a')
  const c = /^a/

  it('should be resolved', () => {
    expect(matchEvery([a, b, c], 'a_1')).toBe(true)
    expect(matchEvery([a, b, c], 'b_1')).toBe(false)
    expect(matchEvery(a)).toBe(true)
  })
})

describe('match some test', () => {
  const a = true
  const b = (path: string) => path.startsWith('a')
  const c = /^a/

  it('should be resolved', () => {
    expect(matchSome([a, b, c], 'a_1')).toBe(true)
    expect(matchSome([a, b, c], 'b_1')).toBe(true)
    expect(matchSome(a)).toBe(true)
  })
})
