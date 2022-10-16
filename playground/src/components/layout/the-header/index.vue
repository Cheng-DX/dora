<script setup lang="ts">
import { LogoGithub } from '@vicons/ionicons5'
import ThemeSwitch from '../tool-box/ThemeSwitch.vue'
import KeepAliveSwitch from '../tool-box/KeepAliveSwitch.vue'

const repoName = 'vue-ts'
const { data } = useFetch<string>(`https://api.github.com/repos/Cheng-DX/${repoName}/releases/latest`)

const repoInfo = computed<{
  name: string
  html_url: string
}>(() => JSON.parse(data.value || '{}'))
</script>

<template>
  <div class="header-root">
    <strong>
      vue-ts
    </strong>
    <div class="toolbox">
      <n-tag
        :bordered="false"
        round
        class="ml-15"
        style="height: 25px"
      >
        <template #icon>
          <n-icon>
            <LogoGithub />
          </n-icon>
        </template>
        <a
          style="text-decoration: none;color: inherit"
          :href="repoInfo?.html_url || '#'"
        >{{ repoInfo?.name || 'fetching...' }}</a>
      </n-tag>
      <ThemeSwitch class="ml-10" />
      <KeepAliveSwitch />
    </div>
  </div>
</template>

<style scoped>
.header-root {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toolbox {
  display: flex;
  align-items: center;
}

.ml-15 {
  margin-left: 15px;
}
.ml-8 {
  margin-left: 5px;
}

.ml-10 {
  margin-left: 10px;
}

.clickable {
  cursor: pointer;
}
</style>
