## useSelection

> Use obejct like value in selection.

### Usage

```vue
<script setup lang="ts">
import { useSelection } from '@chengdx/naive-ui'

const randomObject = [1, 2, 3].map(n => ({
  id: n,
  name: `name${n}`,
  age: n * 10,
}))

const _options = randomObject.map(i => ({
  label: i.name,
  value: i,
}))

const { selected, selectedT, options } = useSelection(_options)

// assume typeof options item is T
// selected: Ref<string> = `{"id":2,"name":"name2","age":20}`
// selectedT: ComputedRef<T> = { id: 2, name: 'name2', age: 20 }
// options: ComputedRef<R[]> and R is the result of transforming T to string by JSON.stringify
</script>

<template>
  <n-select v-model:value="selected" :options="options" />
</template>
```
