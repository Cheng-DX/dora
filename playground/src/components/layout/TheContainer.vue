<script setup lang="ts">
import TheHeader from './the-header/index.vue'
import TheMain from './TheMain.vue'
</script>

<template>
  <n-layout class="the-root">
    <n-layout-header bordered class="the-header">
      <TheHeader />
    </n-layout-header>
    <TheMain />
  </n-layout>
</template>

<style scoped>
.the-root {
  height: 100vh;
}
.the-header {
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>
