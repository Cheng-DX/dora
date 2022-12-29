import type { EChartsOption } from 'echarts'
import { defaultConfig } from './presets'

let baseConfig: EChartsOption = defaultConfig

export function getBase() {
  return baseConfig
}
export function registerBase(base: EChartsOption) {
  baseConfig = base
}

export * from './presets'
