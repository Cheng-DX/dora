<script setup lang="ts">
import type { Format } from '@chengdx/shared'
import { format } from '@chengdx/shared'

const input = ref('')
const type = ref<Format>('camel')
const output = computed(() => format(input.value, type.value).result)
</script>

<template>
  <n-space>
    <n-input v-model:value="input" style="width: 200px" />
    <n-select
      v-model:value="type"
      style="width: 100px"
      :options="[
        { label: 'camel', value: 'camel' },
        { label: 'kebab', value: 'kebab' },
        { label: 'snake', value: 'snake' },
        { label: 'pascal', value: 'pascal' },
      ]"
    />
  </n-space>
  {{ output }}
</template>

<style scoped>

</style>
