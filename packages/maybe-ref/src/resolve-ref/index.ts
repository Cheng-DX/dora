import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'
import type { MaybeComputedRef, MaybeRef } from '../types'

/**
 * from vueuse
 * Normalize value/ref/getter to `ref` or `computed`.
 */
export function resolveRef<T>(r: MaybeComputedRef<T>): ComputedRef<T>
export function resolveRef<T>(r: MaybeRef<T>): Ref<T>
export function resolveRef<T>(r: T): Ref<T>
export function resolveRef<T>(r: MaybeComputedRef<T>) {
  return typeof r === 'function'
    ? computed<T>(r as any)
    : ref(r)
}
