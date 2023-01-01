import { resolve } from 'path'
import { describe, it } from 'vitest'
import { typeMD } from '..'

describe('typeMD', () => {
  interface Meta {
    title: string
    path: string
    name: string
    test: boolean
    num: number
    longnum: number
    arr: number[]
    tags: (string | number)[]
  }
  it('should works', async () => {
    const meta = await typeMD<Meta>(resolve(__dirname, './a.md'))
    console.log(typeof meta.arr[0] === 'number')
  })
})
