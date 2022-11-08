import defu from 'defu'

// @ts-expect-error - No Generic
export const defuWithArray: typeof defu = (src, ...defaults) => {
  if (Array.isArray(src)) {
    const _ = defu(src, ...defaults) as Record<string, any>
    return Object.values(_)
  }
  return defu(src, ...defaults)
}
