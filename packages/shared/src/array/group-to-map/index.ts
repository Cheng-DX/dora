import type { ArrayLike } from '../transform-to-array'
import { toArray } from '../transform-to-array'

export type GroupToMapCallback<T> = (
  element: T, index: number, array: T[]
) => (string | symbol | number | undefined)

/**
 * Array.prototype.groupToMap function
 * @see [Array.prototype.groupToMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap)
 */
export function groupToMap<T>(
  arrayLike: ArrayLike<T>,
  callback: GroupToMapCallback<T>,
  thisArg?: any,
): Map<string | symbol | number, T[]> {
  const arr = toArray(arrayLike)
  const map = new Map()
  arr.forEach((element, index, array) => {
    const key = callback.call(thisArg, element, index, array)
    const keyArr = map.get(key)
    if (!keyArr)
      map.set(key, [element])
    else
      keyArr.push(element)
  })
  return map
}

/**
 * Mount group function to Array.prototype.[key]
 * @param key the key of the function, default is '$groupToMap'
 */
export function mountGroupToMap(key?: string) {
  function _<T>(this: ArrayLike<T>, callback: GroupToMapCallback<T>, thisArg?: any) {
    return groupToMap(this, callback, thisArg)
  }
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, key ?? '$groupToMap', {
    value: _,
    enumerable: false,
  })
}
