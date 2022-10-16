import { NIcon } from 'naive-ui'
import type { Component } from 'vue'
import type { M } from '@chengdx/composables'

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

declare module '@chengdx/composables' {
  interface ApiMap {
    'POST': {
      'test': string
    }
    'Y': number
  }
}

const a: M = 'Y'
