import type { Ref } from 'vue'
import { onUnmounted, ref, watch } from 'vue'
import { createHandlers } from '@chengdx/shared'
import { useEventListener } from '../use-event-listener'

interface UseLocalStorageEvent<T = unknown> {
  key: string
  initialValue: T
  oldValue: T
  newValue: T
}

const { registerHandler, triggerHandlers } = createHandlers<(event: UseLocalStorageEvent) => void>()

export function useLocalStorage<T>(key: string, initialValue: T): Ref<T> {
  function setValue(newValue: T, oldValue?: T) {
    try {
      if (!oldValue)
        oldValue = getValue()

      window.localStorage.setItem(key, JSON.stringify(newValue))
      triggerHandlers({
        key,
        initialValue,
        oldValue,
        newValue,
      })
    }
    catch (error) {
      console.error('[@chengdx/composables]: Error setting localStorage value:', newValue)
    }
  }
  function getValue(): T {
    const storageValue = window.localStorage.getItem(key)
    if (storageValue) {
      try {
        return JSON.parse(storageValue)
      }
      catch (error) {
        console.error('[@chengdx/composables]: Error parsing localStorage value:', storageValue)
        return initialValue
      }
    }
    else {
      return initialValue
    }
  }
  const storage = ref(getValue()) as Ref<T>
  setValue(storage.value)

  const e = (event: UseLocalStorageEvent) => {
    if (event.key === key)
      storage.value = event.newValue as T
  }
  const deleteHandler = registerHandler(e)
  onUnmounted(() => {
    deleteHandler()
  })

  watch(storage, (value, oldValue) => {
    setValue(value, oldValue)
  }, { deep: true })
  useEventListener('storage', (event) => {
    if (event.key === key)
      storage.value = getValue()
  })

  return storage
}
