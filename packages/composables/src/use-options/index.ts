import type { MaybeRef } from '@chengdx/maybe-ref'
import { computed, ref, unref } from 'vue'

export interface Option<L, V> {
  label: L
  value: V
}

export function useOptions<
  L = string,
  V = string | number,
>(
  options: MaybeRef<Option<L, V>[]>,
) {
  const value = ref<V>()
  const label = computed(() => {
    return unref(options).find(option => {
      return option.value === value.value
    })?.label
  })

  return [
    value,
    label,
  ] as const
}
