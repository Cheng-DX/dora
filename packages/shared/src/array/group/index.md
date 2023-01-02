### [Array.prototype.group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group)

> Group the elements of an array based on the given function and return the count of each group.

```ts
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const isEven = (n: number) => n % 2 === 0
const result = arr.group(isEven)
// { false: [1, 3, 5, 7, 9], true: [2, 4, 6, 8, 10] }
```

> mountGroup
```ts
moutnGroup('group')
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const isEven = (n: number) => n % 2 === 0
const result = arr.group(isEven)
```