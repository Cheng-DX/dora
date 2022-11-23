<script setup lang="ts">
import { PostContainer, PostItem } from './test'
</script>

<template>
  <PostContainer>
    <PostItem>
      <template #card>
        <n-card ref="button" style="height: 200px">
          Click
        </n-card>
      </template>
      <template #content>
        <n-card style="height: 300px">
          CONTENT
        </n-card>
      </template>
    </PostItem>
  </PostContainer>
</template>

<style scoped>

</style>
