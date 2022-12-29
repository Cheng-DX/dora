<script setup lang="ts">
import { useLocalStorage } from '@chengdx/composables'
import UseSelection from './UseSelection.vue'
import Transformer from './Transformer.vue'
import Posts from './Posts.vue'
import PropsPresets from './PropsPresets.vue'
import UseEcharts from './UseEcharts.vue'

const count = useLocalStorage('count', 0)
const inc = () => count.value++

const count2 = useLocalStorage('count', 0)
</script>

<template>
  <n-button @click="inc">
    {{ count }}/ {{ count2 }}
  </n-button>
  <!-- <Posts /> -->
  <UseSelection />
  <Transformer />
  <PropsPresets />
  <UseEcharts />
</template>

<style scoped>

</style>
