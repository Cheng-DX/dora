import type { Format } from '@chengdx/shared'
import { formatNaming } from '@chengdx/shared'
import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import type { Ref } from 'vue'
import { ref, watchEffect } from 'vue'

export function useFormatNaming(
  src: Ref<string>,
  target: MaybeComputedRef<Format>,
  options?: {
    /**
     * @default true
     */
    ignoreNonLetters?: boolean
  },
) {
  const _ = {
    result: ref<string>(''),
    parts: ref<string[]>([]),
    type: ref<Format>('camel'),
  }

  watchEffect(() => {
    const { result, parts, type } = formatNaming(src.value, resolveUnref(target), options)
    _.result.value = result
    _.parts.value = parts
    _.type.value = type
  })

  return _
}
