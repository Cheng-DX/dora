import { describe, expect, it } from 'vitest'
import { useMax } from '.'

describe('useMax', () => {
  it('should works', () => {
    const [value, set] = useMax(10)

    expect(value.value).toBe(0)

    set(5)
    expect(value.value).toBe(5)

    set(15)
    expect(value.value).toBe(5)
  })
})
