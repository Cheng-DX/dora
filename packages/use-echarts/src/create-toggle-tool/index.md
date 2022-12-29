### createToggleTool

create a toggle tool in echarts
```ts
const [toolTest] = createToggleTool({
  title: (v) => v ? 'Toggle' : 'NO',
  icon: 'image://https://api.iconify.design/cil:fullscreen.svg',
  onClick: (v) => {
    console.log('click', v)
  },
  name: 'toggle',
  autoToggle: true,
})
```