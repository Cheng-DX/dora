import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveRef, resolveUnref } from '@chengdx/maybe-ref'
import { defu } from 'defu'
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import type { EChartOptionSeries } from '../types'
import baseConfig from '../base/base-config'

export function useChart(
  series: MaybeComputedRef<EChartOptionSeries>,
  options: {
    custom?: MaybeComputedRef<EChartsOption>
    cover?: MaybeComputedRef<boolean>
    tools?: MaybeComputedRef<EChartsOption[]>
  } = {},
) {
  const custom = resolveRef(options.custom ?? {})
  const cover = resolveUnref(options.cover ?? false)
  const tools = resolveUnref(options.tools ?? [])

  const option = computed<EChartsOption>(() => {
    // the object 'base' is the combination of 'baseConfig' and 'custom',
    // if 'fullTool.value' is true, a fullscreen tool will be added
    const base = custom.value
      ? (
          cover
            ? { ...baseConfig, ...custom.value }
            : defu(custom.value, baseConfig, ...tools)
        )
      : defu(baseConfig, ...tools)

    return {
      ...base,
      series: resolveUnref(series),
    }
  })
  return option
}
