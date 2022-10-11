import { describe, expect, it } from 'vitest'
import { defaultExportResolver } from '../src'

describe('default-export-resolver', () => {
  it('should equal', () => {
    const resolver = defaultExportResolver([
      { name: 'VChart', from: 'vue-echarts' },
      { name: 'A', from: 'package-a' },
    ])

    expect(resolver('VChart')).toEqual({
      name: 'default',
      from: 'vue-echarts',
    })
  })
})
