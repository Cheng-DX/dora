## `useTheme`
Create a darkmode ref by `useDarkmode` and sync the theme vars with darkmode

```ts
import { useTheme } from '@chengdx/composables'

const {
  theme, // 'dark' or 'light' string
  darkmode, // darkmode ref
  createTheme, // create a theme var
} = useTheme()

const color = createTheme('white', 'black') // white in light mode, black in dark mode
```