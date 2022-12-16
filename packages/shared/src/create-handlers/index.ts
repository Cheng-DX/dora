type DefaultHandler = () => void

export function createHandlers<H extends (...args: any) => void = DefaultHandler>() {
  const handlers = new Set<H>()

  function registerHandler(handler: H) {
    handlers.add(handler)
    return () => handlers.delete(handler)
  }

  const triggerHandlers = ((...args) => {
    handlers.forEach(handler => handler(...args))
  }) as H

  return { registerHandler, triggerHandlers }
}

