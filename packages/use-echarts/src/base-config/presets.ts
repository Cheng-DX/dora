import type { EChartsOption } from 'echarts'

export const defaultConfig: EChartsOption = {
  title: {
    text: 'chart',
  },
  xAxis: {
    type: 'category',
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {
    type: 'value',
  },
  legend: {
    show: true,
  },
  toolbox: {
    show: true,
    feature: {
      restore: { show: true },
      saveAsImage: { show: true, type: 'png', pixelRatio: 5, backgroundColor: 'transparent' },
    },
  },
  backgroundColor: 'transparent',
}
