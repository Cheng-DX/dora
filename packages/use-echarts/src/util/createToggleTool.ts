import type { MaybeCallable } from '@chengdx/maybe-ref'
import { resolveCallable } from '@chengdx/maybe-ref'
import type { EChartsOption } from 'echarts'
import type { Ref } from 'vue'

export function createToggleTool(
  v: Ref<boolean>,
  name: string,
  title: MaybeCallable<string>,
  icon: MaybeCallable<string>,
): EChartsOption {
  // custom tool must start with my
  // see https://echarts.apache.org/option.html#toolbox.feature
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
