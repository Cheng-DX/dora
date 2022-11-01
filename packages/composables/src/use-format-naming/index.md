## FormatNaming
Format the given string to a naming convention


### Usage
```ts
import { useFormatNaming } from '@chengdx/composables'

const src = ref('hello_world')
const {
  result, // ref('helloWorld')
  type, // ref('snake')
  parts, // ref(['hello', 'world'])
} = useFormatNaming(src, 'camel')
```