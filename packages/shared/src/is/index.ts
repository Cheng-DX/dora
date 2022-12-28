/**
 * Type safe check if a value is a function
 */
export function isFunction<T extends Function>(_: unknown): _ is T {
  return typeof _ === 'function'
}
