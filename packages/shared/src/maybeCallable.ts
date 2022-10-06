export type MaybeCallable<T> = T | ((...args: unknown[]) => T)
