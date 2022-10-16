export {} 
declare global {
  type Ref<T> = import('vue').Ref<T>
  type ComputedRef<T> = import('vue').ComputedRef<T>
  type MaybeRef<T> = import('@vueuse/core').MaybeRef<T>
  type MaybeComputedRef<T> = import('@vueuse/core').MaybeComputedRef<T>
}