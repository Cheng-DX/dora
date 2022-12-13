import { ref } from 'vue'

export function useOptions() {
  const options = ref([])

  return {
    options,
  }
}
