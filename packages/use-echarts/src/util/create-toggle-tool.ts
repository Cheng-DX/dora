import type { MaybeCallable } from '@chengdx/shared'
import { capitalize, resolveCallable } from '@chengdx/shared'
import type { EChartsOption } from 'echarts'
import { computed, ref } from 'vue'

export function createToggleTool(
  config: {
    /**
     * the function that will be called when the tool is clicked
     * @param v current state
     */
    onClick: (v: boolean) => void
    /**
     * the name can be a string or a function that returns a string
     * @see [maybeCallable](https://github.com/Cheng-DX/dora/blob/main/packages/shared/src/maybe-callable/index.md)
     */
    name: MaybeCallable<string, [boolean]>
    /**
     * the title can be a string or a function that returns a string
     * @see [maybeCallable](https://github.com/Cheng-DX/dora/blob/main/packages/shared/src/maybe-callable/index.md)
     */
    title: MaybeCallable<string, [boolean]>
    /**
     * the icon can be a string or a function that returns a string
     * @see [maybeCallable](https://github.com/Cheng-DX/dora/blob/main/packages/shared/src/maybe-callable/index.md)
     */
    icon: MaybeCallable<string, [boolean]>
    /**
     * @default false
     */
    initualValue?: boolean
    /**
     * Auto toogle the value when the tool is clicked
     * @default false
     */
    autoToggle?: boolean
  },
) {
  const { onClick, name, title, icon, initualValue = false, autoToggle = false } = config
  const v = ref(initualValue)

  const tool = computed<EChartsOption>(() => {
    // custom tool must start with my
    // see https://echarts.apache.org/option.html#toolbox.feature
    const resolvedName = resolveCallable(name, v.value)
    const toolName = resolvedName.startsWith('my')
      ? resolvedName
      : `my${capitalize(resolvedName)}`

    return {
      toolbox: {
        feature: {
          [toolName]: {
            show: true,
            title: resolveCallable(title, v.value),
            icon: resolveCallable(icon, v.value),
            onclick: () => {
              onClick(v.value)
              if (autoToggle)
                v.value = !v.value
            },
          },
        },
      },
    }
  })

  return [
    tool,
    v,
  ] as const
}
