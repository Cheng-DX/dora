import { computed, ref } from 'vue'
import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'

export function useSelection<T extends Object>(
  _options: MaybeComputedRef<{
    label: string
    value: T
  }[]>,
) {
  const selected = ref<string>()
  const selectedT = computed<T>(() => {
    try {
      return JSON.parse(selected.value || '{}')
    }
    catch (e) {
      return {}
    }
  })
  const options = computed(() => {
    try {
      const os = resolveUnref(_options).map((option) => {
        return {
          label: option.label,
          value: JSON.stringify(option.value),
        }
      })
      return os
    }
    catch (error) {
      return []
    }
  })

  return {
    selected,
    selectedT,
    options,
  }
}
