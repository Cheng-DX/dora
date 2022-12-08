<script setup lang="ts">
import {
  darkTheme,
  zhCN,
} from 'naive-ui'
import { RouterView } from 'vue-router'
import { useDarkmode } from '@chengdx/composables'
import { fullLoading } from '~/stores/loading'

const { darkmode } = useDarkmode()
</script>

<template>
  <n-config-provider
    :theme="darkmode ? darkTheme : null"
    :locale="zhCN"
    inline-theme-disabled
  >
    <n-dialog-provider>
      <n-message-provider>
        <n-spin :show="fullLoading" description="Loading...">
          <RouterView />
        </n-spin>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style>
.dark {
  color-scheme: dark;
}
</style>
