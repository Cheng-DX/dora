import { computed, ref, unref } from 'vue'
import type { MaybeRef } from '@chengdx/maybe-ref'

export function useSelection<T extends Object>(
  _options: MaybeRef<{
    label: string
    value: T
  }[]>,
) {
  const value = ref<string>()
  const selected = computed<T>(() => {
    try {
      return JSON.parse(value.value || '{}')
    }
    catch (e) {
      return {}
    }
  })
  const options = computed(() => {
    try {
      const os = unref(_options).map((option) => {
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
    value,
    options,
  }
}
