import { assert, describe, expect, it } from 'vitest'
import type { MenuOption } from 'naive-ui'
import { h } from 'vue'
import { createMenu } from '.'

const routes = [
  {
    path: '/',
    name: 'root',
    component: null,
    children: [
      {
        path: '/a',
        name: 'a',
        component: null,
        children: [
          {
            path: '/a-1',
            name: 'a-1',
            component: null,
          },
        ],
      },
    ],
  },
  {
    path: '/b',
    name: 'b',
    component: null,
  },
]

const onClick = () => {}

const menu: MenuOption[] = [
  {
    label: () => h('a', { onClick }, 'root'),
    key: '/',
    children: [
      {
        label: () => h('a', { onClick }, 'a'),
        key: '/a',
        children: [
          {
            label: () => h('a', { onClick }, 'a-1'),
            key: '/a-1',
          },
        ],
      },
    ],
  },
  {
    label: () => h('a', { onClick }, 'b'),
    key: '/b',
  },
]

describe('createMenu', () => {
  it('should return menu', () => {
    expect(createMenu(routes, () => {})).toEqual(menu)
  })
})
