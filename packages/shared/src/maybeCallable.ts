export type MaybeCallable<T> = T | ((...args: any[]) => T)

export function resolveCallable<T>(v: MaybeCallable<T>, ...args: any[]): T {
  return typeof v === 'function'
    ? (v as any)(...args)
    : v
}
