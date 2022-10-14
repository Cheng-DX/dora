import type { ComputedRef, Ref } from 'vue'

export type MaybeRef<T> = Ref<T> | T
export type MaybeComputedRef<T> = (() => T) | MaybeRef<T> | ComputedRef<T>
