import { useLocalStorage, useToggle } from '..'

export function useDarkmode() {
  const darkmode = useLocalStorage('ls_value_from_@chengdx/composables/darkmode', false)
  const toggleDarkmode = useToggle(darkmode)
  return {
    darkmode,
    toggleDarkmode,
  }
}
