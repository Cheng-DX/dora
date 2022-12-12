import { computed } from 'vue'
import { useDarkmode } from '../'

export function useTheme() {
  const { darkmode } = useDarkmode()

  function createTheme<T, F>(trueVal: T, falseVal: F) {
    return computed(() => darkmode.value ? trueVal : falseVal)
  }

  return {
    theme: createTheme('dark', 'light'),
    darkmode,
    createTheme,
  }
}
