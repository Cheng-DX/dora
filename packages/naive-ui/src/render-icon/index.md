## renderIcon

> Render VNode from an icon component

### Usage
```ts
import { renderIcon } from '@chengdx/naive-ui'
import { Circle } from '@vicons/antd'

const icon1 = renderIcon(Circle)

const icon2 = renderIcon(Circle, {
  size: '24px',
  color: 'red',
  // or props of NIcon
  circle: true,
})
```

