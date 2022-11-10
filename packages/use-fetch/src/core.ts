import { defuWithArray } from '@chengdx/defa'
import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveRef, resolveUnref } from '@chengdx/maybe-ref'
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import defu from 'defu'
import type { Fetcher, HasNotParamsPath, HasParamsPath, Params, Path, Return } from './types'
import { createDefualt } from './utils'

const hasInited = false
let fetcher: Fetcher = async (_path, _params, _method = 'GET') => {
  return {} as any
}

export function registerFetcher(_fetcher: Fetcher) {
  if (!hasInited)
    fetcher = _fetcher
}

export function useFetch<P extends HasParamsPath>(
  url: P,
  params: MaybeComputedRef<NonNullable<Params<P>>>,
  options: FetchOptions,
): [
  Ref<Return<P>>,
  () => Promise<Return<P>>,
]

export function useFetch<P extends HasNotParamsPath>(
  url: P,
  options: FetchOptions,
): [
  Ref<Return<P>>,
  () => Promise<Return<P>>,
]

export function useFetch<P extends Path>(
  url: P,
  arg1: MaybeComputedRef<NonNullable<Params<P>>> | FetchOptions,
  arg2?: FetchOptions,
) {
  const data = ref(createDefualt())

  let params: MaybeComputedRef<NonNullable<Params<P>>> | undefined
  let options: FetchOptions

  if (isFetchOptions(arg1)) {
    options = defu(arg1 as any, {
      lazy: false,
      autoRefetch: true,
    })
  }
  else {
    params = arg1
    if (arg2 !== undefined) {
      options = defu(arg2, {
        lazy: false,
        autoRefetch: true,
      })
    }
    else {
      throw new Error('arg2 must be defined')
    }
  }

  const { lazy = false, autoRefetch = true, method } = options

  async function fetch() {
    const fetchResult = await fetcher(resolveUnref(url), resolveUnref(params), method)
    const resolved = defuWithArray(fetchResult, createDefualt())
    data.value = resolved
  }

  if (!lazy)
    fetch()

  if (params && autoRefetch) {
    watch(resolveRef(params), () => {
      fetch()
    })
  }

  return [
    data,
    fetch,
  ] as const
}

function isFetchOptions(
  arg: any,
): arg is FetchOptions {
  if (!arg)
    return false
  return typeof arg === 'object' && Object.hasOwn(arg, 'method')
}

interface FetchOptions {
  /**
   * If true, the fetch function will not be called immediately.
   * default as false
   */
  lazy?: boolean
  /**
   * Automatically refetch while params changed.
   * default as true
   */
  autoRefetch?: boolean
  /**
   * Method of the fetch request.
   */
  method: string
}

