import { type Ref, defineComponent, h, onMounted, ref, watch, watchEffect } from 'vue'
import { type MaybeComputedRef, resolveUnref, useElementBounding } from '@vueuse/core'

export const PostContainer = defineComponent({
  setup(_, { slots }) {
    const { default: posts } = slots
    return () => {
      return h('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          padding: '20px 10px',
        },
      }, [
        h('div', {
          style: {
            border: '1px solid #ccccccad',
            margin: '0 10px',
          },
        }),
        h('div', {
          style: {
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
          },
        }, posts?.()),
      ])
    }
  },
})

export const PostItem = defineComponent({
  setup(_, { slots }) {
    const { card, content } = slots

    const cardRef = ref(null)
    const contentRef = ref(null)

    const { height: cardHeight, update: update1 } = useElementBounding(cardRef)
    const { height: contentHeight, top, update: update2, bottom } = useElementBounding(contentRef)
    const [transform, setTransform] = useMax(() => Math.abs(contentHeight.value - cardHeight.value))

    watchEffect(() => {
      if (top.value < 0)
        setTransform(-top.value + 50)
      else if (bottom.value > window.innerHeight)
        (() => { })()
      else
        setTransform(0)
    })

    return () => h('div', {}, [
      h('div', {
        style: { display: 'inline-block', width: '40%', transform: `translateY(${transform.value}px)` },
        ref: cardRef,
      }, card?.()),
      h('div', {
        style: { display: 'inline-block', width: '60%' },
        ref: contentRef,
      }, content?.()),
      h('pre', {}, cardHeight.value),
      h('pre', null, contentHeight.value),
      h('span', null, transform.value),
    ])
  },
})

function useMax(max: MaybeComputedRef<number>) {
  const _value = ref(0)

  function set(value: number) {
    if (value < resolveUnref(max))
      _value.value = value
  }

  return [_value, set] as const
}
