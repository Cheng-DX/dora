## `replaceSubString`
Replace from start to end of string with new string

### Usage
```ts
import { replaceSubString } from '@chengdx/shared'

replaceSubString('hello world', 6, 10, 'mars') // => 'hello marsd'

// or wanna replace the string which has the same length with replacement
replaceSubString('hello world', 6, 'mar') // => 'hello marsld'
//                                                     ^^^ replace these
```