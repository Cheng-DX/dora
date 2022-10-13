import { describe, it } from 'vitest'
import { autoImportPresets } from '../src'

describe('default-export-resolver', () => {
  it('should equal', () => {
    autoImportPresets['@chengdx/composables'][0] === 'useDarkmode'
  })
})
