import { unref } from 'vue'
import type { MaybeComputedRef, MaybeRef } from '../maybeRef'

/**
 * from vueuse
 * Normalize value/ref/getter to `ref` or `computed`.
 */
export function resolveUnref<T>(r: MaybeComputedRef<T>): T
export function resolveUnref<T>(r: MaybeRef<T>): T
export function resolveUnref<T>(r: T): T
export function resolveUnref<T>(r: MaybeComputedRef<T>) {
  return typeof r === 'function'
    ? (r as any)()
    : unref(r)
}
