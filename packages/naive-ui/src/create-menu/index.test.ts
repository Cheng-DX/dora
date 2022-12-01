import { describe, expect, it } from 'vitest'
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

const menu: MenuOption[] = [
  {
    label: () => h('a', {}, 'root'),
    key: '/',
    children: [
      {
        label: () => h('a', {}, 'a'),
        key: '/a',
        children: [
          {
            label: () => h('a', {}, 'a-1'),
            key: '/a-1',
          },
        ],
      },
    ],
  },
  {
    label: () => h('a', {}, 'b'),
    key: '/b',
  },
]

describe('createMenu', () => {
  it('should return menu', () => {
    expect(JSON.stringify(createMenu(routes))).toMatchObject(JSON.stringify(menu))
  })
})
