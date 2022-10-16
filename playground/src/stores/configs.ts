const isKeepAlive = useLocalStorage(
  '__app_store_isKeepAlive',
  true,
  { mergeDefaults: true },
)

export {
  isKeepAlive,
}
