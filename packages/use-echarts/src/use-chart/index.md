## `useChart`
> Composable function for creating an reactive echart instance in Vuejs.
> Recommend to use with [vue-echarts](https://github.com/ecomfe/vue-echarts).

### Usage

- With pure series object/array. The custom will be merged into the default option.
```ts
import { useChart } from '@chengdx/use-echarts'

// a line chart
const line = useChart([
  {
    name: 'line',
    type: 'line',
    data: [1, 2, 3, 4, 5, 6, 7],
  },
], {
  // it's too complex to write all options here, so you can use [useSimpleChart] in another package.
  custom: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  }
})
```

- The series and custom can be a Ref or a getter function. It will be reactive.

```ts
import { useChart } from '@chengdx/use-echarts'

const data = ref([1, 2, 3, 4, 5, 6, 7])
const line = useChart(() => [
  {
    name: 'line',
    type: 'line',
    data: data.value,
  },
], {
  custom: () => ({
    xAxis: {
      type: 'category',
      data: data.value.map((_, i) => `No.${i + 1}`),
    },
  })
})

// if you can change the data and the chart will be updated.
data.value = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// now the xAxis will be updated too
```
