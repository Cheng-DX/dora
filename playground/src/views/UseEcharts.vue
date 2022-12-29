<script setup lang="ts">
import { createArray } from '@chengdx/shared'
import { createToggleTool, useChart } from '@chengdx/use-echarts'

const { count, inc, dec } = useCounter(12)
const [toolTest] = createToggleTool({
  title: 'myTool',
  icon: 'image://https://api.iconify.design/cil:fullscreen.svg',
  onClick: (v) => {
    console.log('click', v)
  },
  name: () => 'myTool',
  autoToggle: true,
})
const chart = useChart(() => ({
  name: 'vuets',
  type: 'bar',
  data: createArray(count.value, (i) => Math.random() * 100),
}), {
  custom: {
    title: {
      text: 'Sunburst',
    },
  },
  tools: [
    toolTest,
  ],
})
</script>

<template>
  <div style="height: 700px; width: 700px">
    <VChart :option="chart" autoresize />
  </div>
  <n-slider v-model:value="count" style="width: 550px" ml-18 />
</template>

<style scoped>

</style>
