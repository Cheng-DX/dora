import type { MaybeArray } from '../maybe-array'
import { resolveArray } from '../maybe-array'
import { type MaybeCallable, resolveCallable } from '../maybe-callable'

export type Match<Args extends Array<any> = any> = RegExp | MaybeCallable<boolean, Args>

export function resolveMatch(
  v: RegExp,
  ...args: [string]
): boolean

export function resolveMatch<Args extends Array<any> = any>(
  v: Match<Args>,
  ...args: Args
): boolean

export function resolveMatch<Args extends Array<any> = any>(
  v: Match<Args>,
  ...args: Args
): boolean {
  if (v instanceof RegExp) {
    if (args.length !== 1) return false
    return v.test(args[0])
  }
  return resolveCallable(v, ...args)
}

export function resolveMatches<Args extends Array<any> = any>(
  v: MaybeArray<Match<Args>>,
  ...args: Args
) {
  return resolveArray(v).every(v => resolveMatch(v, ...args))
}
