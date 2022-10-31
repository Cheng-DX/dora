import { NIcon } from 'naive-ui'
import type { Component } from 'vue'
import { h } from 'vue'

export function renderIcon(icon: Component, attrs: Record<string, unknown> = {}) {
  return () => h(NIcon, attrs, { default: () => h(icon) })
}
