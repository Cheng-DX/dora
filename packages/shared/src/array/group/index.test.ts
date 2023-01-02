import { describe, expect, it } from 'vitest'
import { groupArray, mountGroup } from '.'

describe('groupArray', () => {
  const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 },
  ]
  const target = {
    vegetables: [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
    ],
    fruit: [
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'cherries', type: 'fruit', quantity: 5 },
    ],
    meat: [
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'fish', type: 'meat', quantity: 22 },
    ],
  }
  it('should works', () => {
    const result = groupArray(inventory, (item) => item.type)
    expect(result).toEqual(target)

    mountGroup()
    const result2 = inventory.$group((item) => item.type)
    expect(result2).toEqual(target)

    const a = [1, undefined, 3]
    expect(a.$group((x) => x)).toEqual({ 1: [1], undefined: [undefined], 3: [3] })
    const arrayLike = {
      length: 3,
      0: 2,
      1: 3,
      2: 4,
    }
    expect(groupArray(arrayLike, (x) => x % 2)).toEqual({ 0: [2, 4], 1: [3] })
  })
})
