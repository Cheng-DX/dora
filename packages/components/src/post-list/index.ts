import type { ComputedRef, DefineComponent } from 'vue'
import { computed, defineComponent, h, inject, provide, ref, watchEffect } from 'vue'
import { type MaybeComputedRef, resolveUnref, useElementBounding, useEventListener } from '@vueuse/core'

export const PostContainer = defineComponent({
  name: 'PostContainer',
  props: {
    headerHeightInPx: Number,
  },
  setup(props, { slots }) {
    provide('headerHeightInPx', computed(() => props.headerHeightInPx))
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
}) as DefineComponent<{
  headerHeightInPx?: number
}>

export const PostItem = defineComponent({
  name: 'PostItem',
  setup(_, { slots }) {
    const headerHeightInPx = inject('headerHeightInPx') as ComputedRef<number | undefined>
    const { card, content } = slots

    const cardRef = ref<HTMLElement>()
    const contentRef = ref<HTMLElement>()

    const { height: cardHeight, update: updateCard } = useElementBounding(() => cardRef.value)
    const { height: contentHeight, top, bottom, update: updateContent } = useElementBounding(() => contentRef.value)

    useEventListener('scroll', () => {
      updateCard()
      updateContent()
    }, true)

    useEventListener('scroll', () => {
      updateCard()
      updateContent()
    }, true)
    const [transform, setTransform] = useMax(() => Math.abs(contentHeight.value - cardHeight.value))

    const resolvedHeaderHeightInPx = computed(() => headerHeightInPx.value ?? 0)
    watchEffect(() => {
      if (top.value < resolvedHeaderHeightInPx.value)
        setTransform(-top.value + resolvedHeaderHeightInPx.value)
      else if (bottom.value > window.innerHeight)
        (() => { })()
      else
        setTransform(0)
    })
    return () => h('div', {
      style: {
        padding: '20px',
        display: 'flex',
      },
    }, [
      h('div', { style: { width: '40%' } }, [
        h('div', {
          style: { display: 'inline-block', transform: `translateY(${transform.value}px)` },
          ref: cardRef,
        }, [
          h('div', {
            class: 'i-carbon-circle-filled',
            style: {
              width: '20px',
              height: '20px',
              position: 'absolute',
              left: '-41px',
              top: '25px',
            },
          }),
          card?.(),
        ],
        )],
      ),
      h('div', {
        style: { display: 'inline-block', width: '60%' },
        ref: contentRef,
      }, content?.()),
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
