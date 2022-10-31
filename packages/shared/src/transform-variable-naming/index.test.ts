import { describe, expect, it } from 'vitest'
import { format } from '.'

describe('transformVariableNaming', () => {
  it('should matched', () => {
    expect(format('foo-file', 'camel')).toMatchInlineSnapshot('"foo-file"')
  })
})
