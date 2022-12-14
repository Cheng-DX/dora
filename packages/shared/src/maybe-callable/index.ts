import { isFunction } from '../is'

export type MaybeCallable<
  T,
  Args extends Array<any> = any,
> = T | ((...args: Args) => T)

export function resolveCallable<T, Args extends Array<any>>(
  v: MaybeCallable<T, Args>,
  ...args: Args
): T {
  return isFunction(v)
    ? v(...args)
    : v
}
