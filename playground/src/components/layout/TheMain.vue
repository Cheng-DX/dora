<script setup>
import { KeepAlive } from 'vue'
import { isKeepAlive } from '~/stores/configs'
</script>

<template>
  <n-layout-content
    style="height: calc(100% - 60px)"
    content-style="padding: 20px"
  >
    <router-view v-slot="{ Component }">
      <KeepAlive v-if="isKeepAlive">
        <component :is="Component" />
      </KeepAlive>
      <component :is="Component" v-else />
    </router-view>
  </n-layout-content>
</template>

