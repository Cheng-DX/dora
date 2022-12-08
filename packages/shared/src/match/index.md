## `resolveMatch` & `resolveMatches`

> Help resolve match for given value. Pure boolean value, function or regex are all supported.
> use `resolveMatches` to resolve maybe-multiple matches.

```ts
import { resolveMatch, resolveMatches } from '@remirror/core'

const a = true
const b = (path: string) => path.startsWith('a')
const c = /^a/

resolveMatch(a) // true

resolveMatch(b, 'a') // true
resolveMatch(b, 'b') // false

resolveMatch(c, 'a') // true
resolveMatch(c, 'b') // false

resolveMatches([a, b, c], 'a_1') // true
resolveMatches([a, b, c], 'b_1') // false

resolveMatches(a) // true
```
