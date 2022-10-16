<script setup lang="ts">
import { Flash, FlashOff } from '@vicons/ionicons5'
import { isKeepAlive } from '~/stores/configs'

function toggleKeepAlive() {
  isKeepAlive.value = !isKeepAlive.value
}
</script>

<template>
  <n-button text @click="toggleKeepAlive">
    <n-icon-wrapper
      :size="20"
      :border-radius="20"
      style="padding: 3px"
    >
      <Flash v-if="isKeepAlive" />
      <FlashOff v-else />
    </n-icon-wrapper>
  </n-button>
</template>
