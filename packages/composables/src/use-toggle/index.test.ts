import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { useToggle } from '.'

describe('useToggle', () => {
  const [value, toggle] = useToggle(false)
  const isSomething = ref(true)
  const toggle2 = useToggle(isSomething)
  it('should works', () => {
    expect(value.value).toBe(false)
    toggle()
    expect(value.value).toBe(true)
    toggle()
    expect(value.value).toBe(false)
    toggle(true)
    expect(value.value).toBe(true)
    toggle(false)
    expect(value.value).toBe(false)

    toggle2()
    expect(isSomething.value).toBe(false)
    toggle2()
    expect(isSomething.value).toBe(true)
  })
})
