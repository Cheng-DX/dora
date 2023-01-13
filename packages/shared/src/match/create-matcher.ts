import type { Matcher } from '.'
import { match } from '.'

class _<Args extends any[] = []> {
  private readonly matcher: Matcher<Args>

  constructor(matcher: Matcher<Args>) {
    this.matcher = matcher
  }

  match(...args: Args) {
    return match(this.matcher, ...args)
  }
}

export function createMatcher<Args extends any[] = []>(matcher: Matcher<Args>) {
  return new _<Args>(matcher)
}
