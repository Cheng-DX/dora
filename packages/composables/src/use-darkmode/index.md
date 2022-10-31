## `useDarkmode`

> Darkmode composable with localStorage.

```ts
import { useDarkmode } from '@chengdx/composables'

const { darkmode, toggleDarkmode } = useDarkmode() // first time: darkmode.value = false

// next time it will be initialized with localStorage value

```