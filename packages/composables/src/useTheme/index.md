## `useTheme`

> A preset to manage some theme variables of the application.
Create a darkmode ref by `useDarkmode` and sync the theme vars with darkmode

```ts
import { useTheme } from '@chengdx/composables'

const {
  color,
  background,
  theme, // 'dark' or 'light' string
  greyColor,
} = useTheme()
```