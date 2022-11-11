import Axios from 'axios'
import type { AxiosInstance, CreateAxiosDefaults } from 'axios'
import type { MaybeComputedRef } from '@chengdx/maybe-ref'
import { resolveRef, resolveUnref } from '@chengdx/maybe-ref'
import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import { defuWithArray } from '../../defa/dist'
import type { Method, Params, Path, Return } from './types'

let axios: AxiosInstance

let GET: any | undefined
let POST: any | undefined

export function configAxios(config: CreateAxiosDefaults) {
  axios = Axios.create(config)
  // @ts-expect-error 'GET' should exist
  GET = createVerbMethod('GET')
  // @ts-expect-error 'POST' should exist
  POST = createVerbMethod('POST')
}

function createVerbMethod<M extends Method>(type: M) {
  return async <P extends Path<M>>(path: P, params?: Params<M, P>) => {
    let status, data
    switch (type) {
      case 'GET':
        ({ status, data } = await axios.get<Return<M, P>>(path, { params }))
        break
      case 'POST':
        ({ status, data } = await axios.post<Return<M, P>>(path, params))
        break
      default:
        throw new Error(`Unknown method type: ${type}`)
    }
    if (status >= 200 && status < 300)
      return data
    return {} as Return<M, P>
  }
}

function useFetch<
  M extends Method,
  P extends Path<M>,
>(
  fetchFunc: (path: P, params?: Params<M, P>) => Promise<Return<M, P>>,
  url: P,
  params?: MaybeComputedRef<Params<M, P>>,
  options?: FetchOptions,
) {
  if (!axios)
    throw new Error('[@chengdx/use-fetch] Please call configAxios to create an instance.')

  const data = ref() as Ref<Return<M, P>>
  const isReady = ref(false)
  const loading = ref(false)
  const { lazy = false, autoRefetch = true } = options || {}

  async function fetch() {
    loading.value = true
    try {
      const fetchResult = await fetchFunc(resolveUnref(url), resolveUnref(params))
      const resolved = defuWithArray(fetchResult, {}) as Return<M, P>
      data.value = resolved
    }
    catch (_) {
      isReady.value = false
    }
    finally {
      loading.value = false
    }
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
    loading,
    isReady,
  ] as const
}

// @ts-expect-error 'Get' should exist
export function useGet<P extends Path<'GET'>>(
  url: P,
  // @ts-expect-error 'Get' should exist
  params?: MaybeComputedRef<Params<'GET', P>>,
  options?: FetchOptions,
) {
  // @ts-expect-error 'Get' should exist
  return useFetch<'GET', P>(GET as any, url, params, options)
}

// @ts-expect-error 'POST' should exist
export function usePost<P extends Path<'POST'>>(
  url: P,
  // @ts-expect-error 'POST' should exist
  params?: MaybeComputedRef<Params<'POST', P>>,
  options?: FetchOptions,
) {
  // @ts-expect-error 'POST' should exist
  return useFetch<'POST', P>(POST as any, url, params, options)
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
}
