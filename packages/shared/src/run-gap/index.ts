export function runGap<F extends Function>(fn: F) {
  const duration = {
    value: 0,
  }
  // @ts-expect-error - we don't care about the return type
  const runner: F = (...args) => {
    const start = Date.now()
    const r = fn(...args)
    const end = Date.now()
    duration.value = end - start
    return r
  }
  return {
    runner,
    duration,
  }
}
