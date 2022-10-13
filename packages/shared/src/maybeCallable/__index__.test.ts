import { assert, describe, it } from 'vitest'
import type { MaybeCallable } from '.'
import { resolveCallable } from '.'

describe('maybeCallable', () => {
  it('should be resolved', () => {
    const a: MaybeCallable<number> = 1
    assert(resolveCallable(a) === 1)
  })
})
