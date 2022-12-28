import type { MaybeComputedRef, MaybeRef } from '@chengdx/maybe-ref'
import { resolveRef } from '@chengdx/maybe-ref'
import { defu } from 'defu'
import { computed, unref } from 'vue'
import type { EChartsOption, SeriesOption } from 'echarts'
import baseConfig from '../base/base-config'

export function useChart(
  series: MaybeComputedRef<SeriesOption>,
  options: {
    custom?: MaybeComputedRef<EChartsOption>
    tools?: MaybeRef<EChartsOption>[]
  } = {},
) {
  const { custom = {}, tools = [] } = options || {}
  const customRef = resolveRef(custom)
  const seriesRef = resolveRef(series)

  const base = computed(() => {
    return defu(customRef.value, baseConfig, ...tools.map(unref))
  })

  const option = computed<EChartsOption>(() => {
    return {
      ...base.value,
      series: seriesRef.value,
    }
  })

  return option
}
