## *`createArray`*
Create an array of the specified length, filled with the map function which arguments has `index` only

> I use `Array.from` so frequently but I hate the mapFn has two arguments
```ts
const a = createArray(2) // [undefined, undefined]

const b = createArray(2, i => i) // [0, 1]

const c = createArray(2, (value, index) => i * 2) // ts error cause there is index only
```