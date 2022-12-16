import type { MaybeComputedElementRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import { onMounted, onUnmounted, watch } from 'vue'

const noop = () => {}

export function useEventListener<E extends keyof WindowEventMap>(
  event: E,
  listener: (event: WindowEventMap[E]) => void,
  target: Window | MaybeComputedElementRef = window,
  options?: AddEventListenerOptions,
) {
  if (!target)
    return noop

  const register = (el: any, event: string, listener: any) => {
    el.addEventListener(event, listener, options)
    return () => el.removeEventListener(event, listener, options)
  }

  let cleanup = noop
  onMounted(() => {
    const el = resolveUnref(target)
    cleanup = register(el, event, listener)
  })

  const stopWatch = watch(
    () => resolveUnref(target),
    (el) => {
      cleanup()
      if (!el)
        return

      cleanup = register(el, event, listener)
    },
    { immediate: true, flush: 'post' },
  )

  const stop = () => {
    stopWatch()
    cleanup()
  }
  onUnmounted(stop)
  return stop
}
