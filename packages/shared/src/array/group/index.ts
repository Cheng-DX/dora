import type { ArrayLike } from '../transform-to-array'
import { toArray } from '../transform-to-array'

export type GroupArrayCallback<T> = (
  element: T, index: number, array: T[]
) => (string | symbol | number | undefined)

/**
 * Array.prototype.group function
 * @see [Array.prototype.group()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group)
 */
export function groupArray<T>(
  arrayLike: ArrayLike<T>,
  callback: GroupArrayCallback<T>,
  thisArg?: any,
): { [key: (string | symbol)]: T[] } {
  const arr = toArray(arrayLike)
  const o = {} as any
  arr.forEach((element, index, array) => {
    let key = callback.call(thisArg, element, index, array)
    if (key === undefined)
      key = 'undefined'

    if (!o[key])
      o[key] = []
    o[key].push(element)
  })
  return o
}

/**
 * Mount group function to Array.prototype.$group
 * To get TypeScript support, add this:
 * ```ts
 * interface Array<T> {
 *   $group(callback: (element: T, index: number, array: T[]) => (string | symbol), thisArg?: any): { [key: (string | symbol)]: T[]
 * }
 * ```
 */
export function mountGroup() {
  function group<T>(this: ArrayLike<T>, callback: GroupArrayCallback<T>, thisArg?: any) {
    return groupArray(this, callback, thisArg)
  }
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, '$group', {
    value: group,
    enumerable: false,
  })
}
