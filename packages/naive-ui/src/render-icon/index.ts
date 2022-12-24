import { type IconProps, NIcon } from 'naive-ui'
import type { Component } from 'vue'
import { h } from 'vue'

export function renderIcon(icon: Component, props: Partial<IconProps>) {
  return () => h(NIcon, props, { default: () => h(icon) })
}
