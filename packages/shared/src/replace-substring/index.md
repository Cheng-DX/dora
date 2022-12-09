## `replaceSubString`
Replace from start to end of string with new string

### Usage
```ts
import { replaceSubstring } from '@chengdx/shared'

replaceSubstring('hello world', 6, 10, 'mars') // => 'hello marsd'

// or wanna replace the string which has the same length with replacement
replaceSubstring('hello world', 6, 'mar') // => 'hello marsld'
//                                                     ^^^ replace these
```