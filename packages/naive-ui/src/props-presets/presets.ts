import type { ButtonProps, TagProps } from 'naive-ui'
import { createPropsPreset } from '.'

export const roundTag = createPropsPreset<TagProps>({
  round: true,
  strong: true,
  bordered: false,
})

export const roundButton = createPropsPreset<ButtonProps>({
  round: true,
  strong: true,
  bordered: false,
  secondary: true,
})
