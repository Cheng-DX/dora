<script setup lang="ts">
import type { SelectOption } from 'naive-ui'
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
</script>

<template>
  <n-select v-model:value="selected" :options="options" />
  <div>
    {{ selected }}
    {{ typeof selected }}
  </div>
  {{ selectedT }}
  {{ typeof selectedT }}
  <pre>
    {{ options }}
  </pre>
</template>

<style scoped>

</style>
