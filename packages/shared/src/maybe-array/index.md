## `MaybeArray`
It might be an array.

```ts
const a: MaybeArray<number> = 1
resolveArray(a) // [1]

const b: MaybeArray<number> = [1, 2]
resolveArray(b) // [1, 2]
```