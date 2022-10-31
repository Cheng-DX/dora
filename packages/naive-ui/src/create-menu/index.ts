import type { MenuOption } from 'naive-ui'
import { h } from 'vue'

interface Route {
  path: string
  name: string
  component: any
  children?: Route[]
}
export function createMenu(
  routes: Route[],
  onclick?: (route?: Route) => void,
): MenuOption[] {
  return routes.map(route => {
    const { path, name, children } = route
    return children
      ? {
          label: () => h('a', { onClick: () => onclick?.(route) }, name),
          key: path,
          children: createMenu(children, onclick),
        }
      : {
          label: () => h('a', { onClick: () => onclick?.(route) }, name),
          key: path,
        }
  })
}
