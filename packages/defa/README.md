## @chengdx/defa
Make the result of defu arrays reasonable.

```ts
import defa from '@chengdx/defa'

const _ = defu([1, 2, 3], [4, 5, 6]) // _ is  an object :{ 0: 1, 1: 2, 2: 3 }
const r = defuWithArray([1, 2, 3], [4, 5, 6]) // but r is an array: [1, 2, 3]
```
