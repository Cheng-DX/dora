<script setup lang="ts">
import { useElementBounding, useEventListener } from '@vueuse/core'
import { PostContainer, PostItem } from '@chengdx/components'
import type { MaybeArray } from '@chengdx/shared'
import FloatCard from '~/components/post/FloatCard.vue'
import ArticleCard from '~/components/post/ArticleCard.vue'

const now = new Date().getTime()

interface Repo {
  name: string
  description?: string
  html_url: string
  language?: string
  stargazers_count: number
  license?: {
    name: string
    url: string
  }
  visibility: string
}
const { data } = useFetch<string>('https://api.github.com/users/Cheng-DX/repos', {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})
const repos = computed(() => {
  return JSON.parse(data.value ?? '[]') as Repo[]
})

const resolvedRepos = computed<{
  title: string
  tags: MaybeArray<{ name: string; link?: string } | string>
  time: number
  link?: string
}[]>(() => {
  return repos.value?.map(repo => {
    return {
      title: repo.name,
      time: now,
      link: repo.html_url,
      tags: [
        repo.language,
        {
          name: `${repo.stargazers_count} stars`,
          link: `${repo.html_url}/stargazers`,
        },
        {
          name: repo.visibility,
          link: `${repo.html_url}/network/dependents`,
        },
        repo.license?.name,
        repo.description,
      ].filter(Boolean) as any,
    }
  }) || []
})

const content = `<br>

<p align="center">
<img width="100px" src="https://api.iconify.design/arcticons:folder-utilities.svg?color=%23a88a8a"/>
</p>

<h1 align="center">@chengdx/utils</h1>

<p align="center">Make a script for everything did more than once</p>

## List
- [compoables](./packages/composables/README.md): composable functions for Vue.js
- [default-export-resolver](./packages/default-export-resolver/README.md): help to generate default export for \`unplugin-vue-components\` and \`unplugin-auto-import\`
- [shared](./packages/shared/README.md): shared utils
- [use-echarts](./packages/use-echarts/README.md): composable functions for creating an reactive echart instance in Vuejs.
- [naive-ui](./packages/naive-ui/README.md): naive-ui tools
- [maybe-ref](./packages/maybe-ref/README.md): MaybeRef stuff

## Install (Why not try [ni](https://github.com/antfu/ni))
\`\`\`sh
npm install @chengdx/[package-name]
\`\`\`


[MIT](./LICENSE) License © 2022 [Cheng-DX](https://github.com/Cheng-DX)
`
</script>

<template>
  <PostContainer :header-height-in-px="60">
    <PostItem v-for="{ title, time, tags, link } in resolvedRepos" :key="title">
      <template #card>
        <FloatCard :title="title" :time="time" :tags="tags" :class="link" />
      </template>
      <template #content>
        <ArticleCard :content="content" />
      </template>
    </PostItem>
  </PostContainer>
</template>

<style scoped>

</style>
