export interface DefaultExport {
  name: string
  from: string
}

export function defaultExportResolver(exports: DefaultExport[]) {
  const map = new Map<string, string>()
  for (const { name, from } of exports)
    map.set(name, from)
  return (componentName: string) => {
    if (map.has(componentName)) {
      return ({
        name: 'default',
        from: map.get(componentName)!,
      })
    }
  }
}
