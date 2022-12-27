## useSelection
> Use obejct like value in `NSelect` component.

### Usage

```ts
import { useSelection } from '@chengdx/naive-ui'

interface User {
  id: number
  name: string
  age: number
}
const randomObject: User[] = [1, 2, 3].map(n => ({
  id: n,
  name: `name${n}`,
  age: n * 10,
}))

const { value, selected, options, renderLabel } = useSelection(randomObject.map(i => ({
  label: i.name,
  value: i,
})), { renderLabel: (user: User) => h('span', {}, user.name) })

// selected: ComputedRef<User>
```

in template
```html
<n-select :options="options" v-model:value="value" :render-label="renderlabel" />
```
