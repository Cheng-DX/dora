import { describe, expect, it } from 'vitest'
import { formatNaming } from '.'

describe('transformVariableNaming', () => {
  it('should matched', () => {
    expect(formatNaming('foo-file', 'camel').result).toMatchInlineSnapshot('"fooFile"')
  })
})
