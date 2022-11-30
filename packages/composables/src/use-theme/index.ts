import { computed } from 'vue'
import { useDarkmode } from '../'

export function useTheme() {
  const { darkmode } = useDarkmode()

  function darkmodeComputed<T, F>(trueVal: T, falseVal: F) {
    return computed(() => darkmode.value ? trueVal : falseVal)
  }

  return {
    color: darkmodeComputed('rgb(255,255,255,0.82)', 'rgb(0,0,0,0.82)'),
    background: darkmodeComputed('#000', '#fff'),
    theme: darkmodeComputed('dark', 'light'),
    greyColor: darkmodeComputed('#666666', '#66666666'),
  }
}
