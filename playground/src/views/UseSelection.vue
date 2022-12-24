<script setup lang="ts">
import { NSelect, NSpace, NTag, type TagProps } from 'naive-ui'
import { roundTag, useSelection } from '@chengdx/naive-ui'

const type = ref('success')
const types = ['success', 'error', 'warning', 'info', 'default'].map(i => ({
  label: i,
  value: i,
}))
const t = roundTag(() => ({
  type: type.value as any,
  size: 'tiny',
}))
const { selected, options, value, renderLabel } = useSelection(
  [1, 2, 3].map(i => ({
    label: `label${i}`,
    value: {
      id: i,
      name: `name${i}`,
      age: i * 10,
    },
  }),
  ), {
    renderer: selected => {
      return h(NSpace, {}, [
        h(NTag, t.value, `${selected.age}岁`),
        h(NTag, null, `${selected.name}`),
        h(NTag, null, `${selected.id}`),
      ])
    },
  },
)
</script>

<template>
  <NSelect v-model:value="type" :options="types" />
  <NSelect v-model:value="value" style="width: 300px" :options="options" :render-label="renderLabel" />
  <pre>
    {{ selected }}
  </pre>
</template>

<style scoped>

</style>
