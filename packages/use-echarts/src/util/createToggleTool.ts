import type { MaybeCallable } from '@chengdx/shared'
import { resolveCallable } from '@chengdx/shared'
import type { EChartsOption } from 'echarts'
import type { Ref } from 'vue'

export function createToggleTool(
  v: Ref<boolean>,
  name: string,
  title: MaybeCallable<string>,
  icon: MaybeCallable<string>,
): EChartsOption {
  const resolvedName = name.startsWith('my')
    ? name
    : `my${name[0].toUpperCase()}${name.slice(1)}`

  return {
    toolbox: {
      feature: {
        [resolvedName]: {
          show: true,
          title: resolveCallable(title, v.value),
          icon: resolveCallable(icon, v.value),
          onclick: () => {
            v.value = !v.value
          },
        },
      },
    },
  }
}
