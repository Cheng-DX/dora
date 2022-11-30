import type { MaybeRef } from '@chengdx/maybe-ref'
import { isRef, ref } from 'vue'
import type { Ref } from 'vue'

export function useToggle(initialValue: Ref<boolean>): (newVal?: boolean) => void
export function useToggle(initialValue: boolean): [Ref<boolean>, (newVal?: boolean) => void]

export function useToggle(initialValue: MaybeRef<boolean>) {
  if (isRef(initialValue))
    return createToggle(initialValue)

  const value = ref(initialValue)
  return [value, createToggle(value)] as const
}

function createToggle(refVal: Ref<boolean>) {
  const toggle = (newVal?: boolean) => {
    if (typeof newVal === 'boolean')
      refVal.value = newVal
    else
      refVal.value = !refVal.value
  }
  return toggle
}
