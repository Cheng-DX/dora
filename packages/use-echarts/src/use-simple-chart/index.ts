import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import defu from 'defu'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
import { useChart } from '../use-chart'
import type { DataType, EChartOptionSeries } from '../types'

export function useSimpleChart(
  x: MaybeComputedRef<DataType[]>,
  title: MaybeComputedRef<string>,
  series: MaybeComputedRef<EChartOptionSeries>,
  options: {
    custom?: MaybeComputedRef<EChartsOption>
    tools?: MaybeComputedRef<EChartsOption[]>
  } = {},
) {
  const { custom = {}, tools } = options

  const appendedCustom = computed<EChartsOption>(() => {
    const titleAndXData: EChartsOption = {
      title: {
        text: resolveUnref(title),
      },
      xAxis: {
        data: resolveUnref(x),
      },
    }
    return defu(titleAndXData, resolveUnref(custom))
  })

  return useChart(series, { custom: appendedCustom, tools })
}
