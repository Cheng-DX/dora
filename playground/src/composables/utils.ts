import { NIcon } from 'naive-ui'
import type { Component } from 'vue'

export function writableComputed<T>(getter: () => T) {
  const innerRef = ref(getter()) as Ref<T>
  watch(getter, () => {
    innerRef.value = getter()
  })

  return innerRef
}

export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
