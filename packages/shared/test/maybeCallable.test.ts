import { assert, describe, it } from 'vitest'
import type { MaybeCallable } from '../src/maybeCallable'
import { resolveCallable } from '../src/maybeCallable'

describe('maybeCallable', () => {
  it('should be matched', () => {
    const a: MaybeCallable<number> = () => 1
    const b = resolveCallable(a)
    assert.equal(b, 1)

    const c: MaybeCallable<string> = '1'
    const d = resolveCallable(c)
    assert.equal(d, '1')

    interface A { a: number }
    const e: MaybeCallable<A> = (a: number) => ({ a })
    const f = resolveCallable(e, 1)
    assert.deepEqual(f, { a: 1 })
  })
})

