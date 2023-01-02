## runGap
> run a function and get the duration

```ts
const f = (a: number, b: string) => {
  Array.from({ length: 1000000 }).forEach(() => {
    return a + b
  })
  return a - Number(b)
}

const {
  runner, // the function that will run the function
  duration, // the duration of the function
} = runGap(f)

```