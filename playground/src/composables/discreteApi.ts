import type { ConfigProviderProps } from 'naive-ui'
import {
  createDiscreteApi,
  darkTheme,
  lightTheme,
} from 'naive-ui'

const { darkmode } = useDarkmode()

const configProviderProps = computed<ConfigProviderProps>(() => ({
  theme: darkmode.value ? darkTheme : lightTheme,
}))

const {
  message,
  dialog,
  notification,
  loadingBar,
} = createDiscreteApi(['message', 'dialog', 'notification', 'loadingBar'], {
  configProviderProps,
})

export {
  message,
  dialog,
  notification,
  loadingBar,
}
