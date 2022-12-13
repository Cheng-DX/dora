import { describe, expect, it } from 'vitest'
import { runGap } from '.'

describe('runGap', () => {
  const f = (a: number, b: string) => {
    Array.from({ length: 1000000 }).forEach(() => {
      return a + b
    })
    return a - Number(b)
  }
  it('should works', () => {
    const { runner, duration } = runGap(f)
    expect(runner(1, '2')).toBe(-1)
    console.error(duration.value)
  })
})
