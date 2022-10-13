import { computed } from 'vue'
import { useDarkmode } from '../useDarkmode'

const { darkmode } = useDarkmode()

/**
 * create a computed property that returns the opposite of the darkmode state
 * @param trueVal - the value to return if darkmode is true
 * @param falseVal - the value to return if darkmode is false
 */
function darkmodeComputed<T, F>(trueVal: T, falseVal: F) {
  return computed(() => darkmode.value ? trueVal : falseVal)
}

export function useTheme() {
  return {
    color: darkmodeComputed('rgb(255,255,255,0.82)', 'rgb(0,0,0,0.82)'),
    background: darkmodeComputed('#000', '#fff'),
    theme: darkmodeComputed('dark', 'light'),
    greyColor: darkmodeComputed('#666666', '#66666666'),
  }
}
