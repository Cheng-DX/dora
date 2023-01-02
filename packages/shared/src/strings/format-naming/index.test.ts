import { describe, expect, it } from 'vitest'
import { formatNaming } from '.'

describe('transformVariableNaming', () => {
  it('should matched', () => {
    expect(formatNaming('foo-file', 'camel').result).toMatchInlineSnapshot('"fooFile"')
    expect(formatNaming('foo-file', 'pascal').result).toMatchInlineSnapshot('"FooFile"')
    expect(formatNaming('foo-file', 'kebab').result).toMatchInlineSnapshot('"foo-file"')
    expect(formatNaming('foo-file', 'snake').result).toMatchInlineSnapshot('"foo_file"')
  })
})
