import { describe, expect, it } from 'vitest'
import { useMax } from '.'

describe('useMax', () => {
  const [v, set] = useMax(10)
  it('should works', () => {
    expect(v.value).toBe(0)
    set(5)
    expect(v.value).toBe(5)
    set(15)
    expect(v.value).toBe(5)
  })
})
