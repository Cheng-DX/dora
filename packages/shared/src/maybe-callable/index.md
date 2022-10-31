## `maybeCallable`

> A TypeScript util type, it might be a function or a pure value.

```ts
import { type MaybeCallable, resolveCallable } from '@chengdx/shared'

// without arguments
const a: MaybeCallable<string> = 'a'
const b = () => 'b'

const resolvedA = resolveCallable(a) // resolvedA = 'a'
const resolvedB = resolveCallable(b) // resolvedB = 'b'

// with argument(s)
const c: MaybeCallable<stirng> = (arg: string) => arg
const d: MaybeCallable<stirng> = (arg1: string, arg2: string) => arg1 + arg2

const resolvedC = resolveCallable(c, 'resolved') // resolvedC = 'resolved'
const resolvedD = resolveCallable(d, 'resolved', 'D') // resolvedD = 'resolvedD'
```