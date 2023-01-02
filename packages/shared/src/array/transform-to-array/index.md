## `MaybeArray`
It might be an array.

```ts
const a: MaybeArray<number> = 1
resolveArray(a) // [1]

const b: MaybeArray<number> = [1, 2]
resolveArray(b) // [1, 2]
```

## `ArrayLike`
It's an array-like object.

```ts
const a1 = { length: 3, 0: 2, 1: 3, 2: 4 }
const a2 = { length: 5, 0: 2, 1: 3, 4: 4, }
const a2 = { length: 3, 0: 2, 1: 3, 4: 4, }

toArray(a1) // [2, 3, 4]
toArray(a2) // [2, 3, undefined, undefined, 4]
toArray(a3) // [2, 3, undefined]
```