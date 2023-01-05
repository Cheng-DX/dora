import type { ArrayLike, GroupArrayCallback } from '@chengdx/shared'
import { groupToMap } from '@chengdx/shared'
import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import { computed } from 'vue'

export function useGroupToMap<T>(
  arr: MaybeComputedRef<ArrayLike<T>>,
  callback: GroupArrayCallback<T>,
  thisArg?: any,
) {
  return computed(() => groupToMap(
    resolveUnref(arr),
    callback,
    thisArg),
  )
}
