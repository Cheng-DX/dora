type GroupArrayCallback<T> = (
  element: T, index: number, array: T[]
) => (string | symbol | number | undefined)

interface Array<T> {
  $group(callback: GroupArrayCallback<T>, thisArg?: any): { [key: (string | symbol)]: T[] }
}
