import { dependencies } from '../package.json'

export type Package = keyof typeof dependencies
export function getPackages(filter: (pkg: Package) => boolean) {
  return (Object.keys(dependencies) as Package[]).filter(filter)
}
