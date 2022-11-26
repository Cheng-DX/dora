<script setup lang="ts">
import MarkdownIt from 'markdown-it'

const props = defineProps<{
  content: string
}>()
const md = new MarkdownIt()

const html = computed(() => md.render(props.content))
</script>

<template>
  <n-card>
    <div pt-10px pb-10px class="the-border" v-html="html" />
  </n-card>
</template>

<style scoped>
.the-border {
  border-bottom: 1px solid #d0d7de;
}
</style>
