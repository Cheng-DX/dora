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
type A = MaybeCallable<
  { tag: number },
  [string, number, { tag: boolean }] // args are (arg1: string, arg2: number, arg3: { tag: boolean })
>

const a: A = (_: string) => ({ tag: Number(_) })
const b = resolveCallable2(a, '1', 1, { tag: true }) // b has type { tag: number }
```