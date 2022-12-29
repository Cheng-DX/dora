import type { MaybeComputedRef, MaybeRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import defu from 'defu'
import type { EChartsOption, SeriesOption } from 'echarts'
import { computed } from 'vue'
import { useChart } from '../use-chart'

export type DataType = string | number

export function useSimpleChart(
  x: MaybeComputedRef<DataType[]>,
  series: MaybeComputedRef<SeriesOption>,
  title: MaybeComputedRef<string>,
  options: {
    custom?: MaybeComputedRef<EChartsOption>
    tools?: MaybeRef<EChartsOption>[]
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
