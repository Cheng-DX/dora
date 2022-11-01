## FormatNaming
```ts
import { type Format, formatNaming } from '@chengdx/shared'

const {
  result, // 'helloWorld'
  parts, // ['hello', 'world']
  type, // 'snake'
} = formatNaming('hello_world', 'camel')
//                               ^^^^^
// change this arg:  <-----------
// 'camel'  ---> 'helloWorld'
// 'pascal' ---> 'HelloWorld'
// 'snake'  ---> 'hello_world'
// 'kebab'  ---> 'hello-world'

```