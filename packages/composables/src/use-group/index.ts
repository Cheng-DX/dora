import type { ArrayLike, GroupArrayCallback } from '@chengdx/shared'
import { groupArray } from '@chengdx/shared'
import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import { computed } from 'vue'

export function useGroup<T>(
  arr: MaybeComputedRef<ArrayLike<T>>,
  callback: GroupArrayCallback<T>,
  thisArg?: any,
) {
  return computed(() => groupArray(
    resolveUnref(arr),
    callback,
    thisArg),
  )
}
