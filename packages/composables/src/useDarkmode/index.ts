import { useLocalStorage, useToggle } from '@vueuse/core'

const darkmode = useLocalStorage(
  'ls_value_from_@chengdx/composables/darkmode',
  false,
  { mergeDefaults: true },
)
const toggleDarkmode = useToggle(darkmode)
export function useDarkmode() {
  return {
    darkmode,
    toggleDarkmode,
  }
}
