## useOptions
> Input options and get the value and label

```ts
import { useOptions } from '@chengdx/composables'

const options = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
]
const [id, name] = useOptions(options)
// id.value = '1'
// name.value = 'One'
```