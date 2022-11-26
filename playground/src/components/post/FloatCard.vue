<script setup lang="ts">
import type { MaybeArray } from '@chengdx/shared'
import { resolveArray } from '@chengdx/shared'

const props = defineProps<{
  title: string
  tags: MaybeArray<{ name: string; link?: string } | string>
  time: number
  link?: string
}>()

const resolvedTags = computed(() => {
  const tags = resolveArray(props.tags)
  return tags.map(tag => {
    return typeof tag === 'string'
      ? ({ name: tag, link: '' })
      : tag
  })
})

const formattedTime = useDateFormat(props.time, 'MMMM D, YYYY')
</script>

<template>
  <div>
    <h2>
      <a bg-transparent decoration-none :href="link">{{ title }}</a>
    </h2>
    <div mb-10px mt-10px font-450 text-14px>
      {{ formattedTime }}
    </div>
    <ul inline-block list-none mt-8px pl-0 mb-0 box-border class="ul-main">
      <li v-for="{ name, link } in resolvedTags" :key="name" inline-block mr-8px mb-12px box-border class="li-main">
        <a :href="link" style="line-height: 20px" text-14px class="text-gradient-purple-coral">
          {{ name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.text-gradient-purple-coral {
  background: linear-gradient(-70deg, #8250df 0%, #d42a32 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border-color: linear-gradient(-70deg, #8250df 0%, #d42a32 80%);
  border: 1.5px solid;
  padding: 5px 10px;
  border-radius: 20px;
}

.li-main {
  text-align: -webkit-match-parent;
}
</style>
