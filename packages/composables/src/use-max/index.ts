import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import { ref } from 'vue'

export function useMax(max: MaybeComputedRef<number>) {
  const _value = ref(0)

  function set(value: number) {
    if (value < resolveUnref(max))
      _value.value = value
  }

  return [_value, set] as const
}
