<script setup lang="ts">
import { Moon, Sunny } from '@vicons/ionicons5'
import { useDarkmode } from '@chengdx/composables'

const { darkmode, toggleDarkmode } = useDarkmode()
const iconColor = computed(() => darkmode.value ? '#d03050' : '#2080f0')
</script>

<template>
  <n-button text style="margin-right: 10px" @click="toggleDarkmode()">
    <n-icon-wrapper
      :size="20"
      :border-radius="20"
      style="padding: 3px"
      :color="iconColor"
    >
      <Moon v-if="darkmode" :size="18" />
      <Sunny v-else :size="18" />
    </n-icon-wrapper>
  </n-button>
</template>
