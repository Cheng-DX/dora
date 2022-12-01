import { assert, describe, it } from 'vitest'
import type { MaybeCallable } from '.'
import { resolveCallable } from '.'

describe('maybeCallable', () => {
  it('should be resolved', () => {
    const a: MaybeCallable<number> = 1
    assert(resolveCallable(a) === 1)
  })

  it('with args', () => {
    type A = MaybeCallable<
      { str: string; num: number; tag: boolean },
      [string, number, { tag: boolean }]
    >

    const a: A = (str, num, obj) => {
      return { str, num, tag: obj.tag }
    }
    const b = resolveCallable(a, '1', 1, { tag: true })
    assert(b.str === '1')
    assert(b.num === 1)
    assert(b.tag === true)
  })
})
