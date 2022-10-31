## createMenu
> Create menu in naive-ui with routes and onClick function

### Usage
```ts
import { createMenu } from '@chengdx/naive-ui'

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

const menu = createMenu(routes, {
  onClick: (route) => {
    console.log(route)
  },
})

const menu: MenuOption[] = [
  {
    label: () => h('a', { onClick: (route) => { console.log(route) } }, 'root'),
    key: '/',
    children: [
      {
        label: () => h('a', { onClick: (route) => { console.log(route) } }, 'a'),
        key: '/a',
        children: [
          {
            label: () => h('a', { onClick: (route) => { console.log(route) } }, 'a-1'),
            key: '/a-1',
          },
        ],
      },
    ],
  },
  {
    label: () => h('a', { onClick: (route) => { console.log(route) } }, 'b'),
    key: '/b',
  },
]

```

