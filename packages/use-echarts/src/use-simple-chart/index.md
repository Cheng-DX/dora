## `useSimpleChart`
> Simplified version of [useChart](../use-chart/index.md). It's easier to use.

### Usage

- With pure series object/array. It provide xData
```ts
import { useSimpleChart } from '@chengdx/use-echarts'

// a line chart
const line = useSimpleChart(
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // x data
  'title',
  // series
  [
    {
      name: 'line',
      type: 'line',
      data: [1, 2, 3, 4, 5, 6, 7],
    },
  ],
  {
    custom: {
      // you can use custom option too
    }
  }
)
```

- Same as useChart, the series and custom can be a Ref or a getter function. It will be reactive.

```ts
import { useSimpleChart } from '@chengdx/use-echarts'

const x = ref([1, 2, 3, 4, 5, 6, 7])
const line = useSimpleChart(
  x,
  'title',
  () => [
    {
      name: 'line',
      type: 'line',
      data: x.value,
    },
  ]
)

// if you can change the data and the chart will be updated.
data.value = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// now the xAxis will be updated too
```
