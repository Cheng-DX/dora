import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import { type Ref, computed, ref } from 'vue'

export function useMax(max: MaybeComputedRef<number>) {
  const _value = ref(0)
  const value = computed(() => _value.value) as Readonly<Ref<number>>

  function set(value: number) {
    if (value < resolveUnref(max))
      _value.value = value
  }

  return [value, set] as const
}
