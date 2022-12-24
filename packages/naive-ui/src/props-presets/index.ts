import defa from '@chengdx/defa'
import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveUnref } from '@chengdx/maybe-ref'
import { computed } from 'vue'

export function createPropsPreset<P>(defaultProps: Partial<P>) {
  return (custom?: MaybeComputedRef<Partial<P>>) => {
    return computed(() => defa(resolveUnref(custom), defaultProps) as P)
  }
}
