import { dependencies } from '../package.json'

export function getPackages(filter: (pkg: string) => boolean) {
  return Object.keys(dependencies).filter(filter)
}
