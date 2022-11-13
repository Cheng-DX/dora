import defu from 'defu'

// @ts-expect-error - No Generic
const defa: typeof defu = (src, ...defaults) => {
  if (Array.isArray(src)) {
    const _ = defu(src, ...defaults) as Record<string, any>
    return Object.values(_)
  }
  return defu(src, ...defaults)
}

export default defa
