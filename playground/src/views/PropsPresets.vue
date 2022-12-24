<script setup lang="ts">
import { roundButton, roundTag } from '@chengdx/naive-ui'

const p = roundTag({
  type: 'success',
})
const [secondary, toggle] = useToggle(false)
const text = computed(() => secondary.value ? 'secondary' : 'first')
const b = roundButton(() => ({
  type: 'success',
  secondary: secondary.value,
}))
</script>

<template>
  <n-tag v-bind="p">
    I'm from Tag presets
  </n-tag>
  <n-button v-bind="b" mt-2 @click="toggle()">
    {{ text }}
  </n-button>
</template>

<style scoped>

</style>
