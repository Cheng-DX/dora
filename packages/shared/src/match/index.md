## `match`, `matchSome`, `matchEvery` and type `Mather`

> Help resolve match for given value. Pure boolean value, function or regex are all supported.

> `matchSome` will return true if any of the given value matches.
> `matchEvery` will return true if all of the given value matches.

```ts
import { type Macther, match, matchSome } from '@chengdx/shared'

const a: Mather = true
const b: Mather<[path]> = (path: string) => path.startsWith('a')
const c = /^a/

match(a) // true

match(b, 'a') // true
match(b, 'b') // false

match(c, 'a') // true
match(c, 'b') // false

matchSome([a, b, c], 'a_1') // true
matchSome([a, b, c], 'b_1') // false

matchSome(a) // true
```
