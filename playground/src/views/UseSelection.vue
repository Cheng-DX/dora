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

const { selected, options, value } = useSelection(_options)

watch(value, () => {
  console.log('selected changed')
  console.log(value, selected)
})
</script>/

<template>
  <n-select v-model:value="value" :options="options" />
  <div>
    {{ value }}
    {{ typeof value }}
  </div>
  {{ selected }}
  {{ typeof selected }}
  <pre>
    {{ options }}
  </pre>
</template>

<style scoped>

</style>
