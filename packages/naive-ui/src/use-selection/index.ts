import type { VNodeChild } from 'vue'
import { computed, ref, unref } from 'vue'
import type { MaybeRef } from '@chengdx/maybe-ref'
import type { SelectOption } from 'naive-ui'

export function useSelection<T extends Object>(
  _options: MaybeRef<{
    label: string
    value: T
  }[]>,
  /**
   * render object to vNode
   */
  renderer?: (selected: T) => VNodeChild,
) {
  const value = ref<string>()
  const selected = computed<T>(() => {
    return value2Object(value.value)
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
  const renderLabel = renderer
    ? (option: SelectOption) => {
        const value = option.value as string
        const t = value2Object<T>(value)
        return renderer(t)
      }
    : undefined

  return {
    selected,
    value,
    options,
    renderLabel,
  }
}

function value2Object<T>(value?: string) {
  try {
    return JSON.parse(value || '{}') as T
  }
  catch (e) {
    return {} as T
  }
}
