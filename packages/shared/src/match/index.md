## `match`, `matchSome`, `matchEvery` and type `Mather`

> Help handle the given value and check if it matches your rule(s).
- Pure boolean value, function or regex are all supported.
- match single, multiple or all of the given value(s).
- match some or match every for the given value(s).

### The Matchers
> There are 3 types of matchers, pure boolean value, function and regex.
- Pure value, like true or false
```ts
const pureBoolMatcher: Matcher = true
```

- Function, which will be called with the given value
```ts
const matchPathStartWithA: Matcher<[string]> = (path: string) => path.startsWith('a')
//                                 ^^^^^^^^ -----> the generic means the type of args, it MUST be an array
// However, you can also ignore the generic, the TS server will infer the type for you

match(matchPathStartWithA, 'a') // true
//                         ^^^ -----> the target value
match(matchPathStartWithA, 'b') // false

// Mutiple args
const matchFileInSrc: Matcher<[string, string]> = (path: string, suffix: string) => path.startsWith('src') && path.endsWith(suffix)
match(matchPath, 'src/views/index.ts', '.ts') // match ts file in src -> true
match(matchPath, 'src/views/index.ts', '.js') // match js file in src -> false
```

- Regex, which will be called with the given value
```ts
const regexMatcher: Matcher = /^a_/

match(regexMatcher, 'a') // true
match(regexMatcher, 'b') // false
```

### match mutiple mathers: `matchSome` and `matchEvery`
> `matchSome` will return true if any of the given value matches.
> `matchEvery` will return true if all of the given value matches.

```ts
const pureBoolMatcher: Matcher = true
const functionalMatcher: Matcher<[string]> = (path: string) => path.startsWith('a')
const regexMatcher: Matcher = /^a_/

matchSome([
  pureBoolMatcher, // will be true
  functionalMatcher, // path.startsWith('a') will be true
  regexMatcher, // /^a_/.test('a') will be true
], 'a_1') // true

matchSome([
  pureBoolMatcher, // will be true
  functionalMatcher, // path.startsWith('a') will be false
  regexMatcher, // /^a_/.test('b') will be false
], 'b_1') // true (because of pureBoolMatcher)

matchEvery([
  pureBoolMatcher,
  functionalMatcher,
  regexMatcher
], 'a_1') // true
matchEvery([
  pureBoolMatcher,
  functionalMatcher,
  regexMatcher
], 'b_1') // false

// You can use single matcher as well, it will be transformed to an array
// It's useful when you don't know the type of matcher
matchSome(pureBoolMatcher) // true
matchEvery(pureBoolMatcher) // true
```
