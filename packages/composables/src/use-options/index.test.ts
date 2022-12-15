import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { useOptions } from '.'

describe('useOptions', () => {
  const options = ref([
    { label: 'vue', value: '1' },
    { label: 'react', value: '2' },
    { label: 'rollup', value: '3' },
  ])
  it('should works', () => {
    const [pkgId, pkgName] = useOptions(options)

    pkgId.value = '1'
    expect(pkgName.value).toBe('vue')

    pkgId.value = '2'
    expect(pkgName.value).toBe('react')
  })
})
