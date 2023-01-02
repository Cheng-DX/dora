import type { MaybeArray } from '../array/transform-to-array'
import { resolveArray } from '../array/transform-to-array'
import { type MaybeCallable, resolveCallable } from '../maybe-callable'

export type Matcher<Args extends Array<any> = []> = RegExp | MaybeCallable<boolean, Args>

export function match(
  v: RegExp,
  ...args: [string]
): boolean

export function match<Args extends Array<any> = []>(
  v: MaybeCallable<boolean, Args>,
  ...args: Args
): boolean

export function match<Args extends Array<any> = []>(
  v: Matcher<Args>,
  ...args: Args
): boolean

export function match<Args extends Array<any> = []>(
  v: Matcher<Args>,
  ...args: Args
): boolean {
  if (v instanceof RegExp) {
    if (args.length !== 1)
      return false
    return v.test(args[0])
  }
  return resolveCallable(v, ...args)
}

export function matchEvery<Args extends Array<any> = []>(
  v: MaybeArray<Matcher<Args>>,
  ...args: Args
) {
  return resolveArray(v).every(v => match(v, ...args))
}

export function matchSome<Args extends Array<any> = any>(
  v: MaybeArray<Matcher<Args>>,
  ...args: Args
) {
  return resolveArray(v).some(v => match(v, ...args))
}
