import { useSyncExternalStore } from 'react'

const subscribe = (cb: EventListenerOrEventListenerObject) => {
  window.addEventListener('popstate', cb)
  return () => window.removeEventListener('popstate', cb)
}

let _prevSearch = window.location.search
let _prevParams = new URLSearchParams(_prevSearch)
const getSnapshot = () => {
  if (window.location.search !== _prevSearch) {
    _prevSearch = window.location.search
    _prevParams = new URLSearchParams(_prevSearch)
  }

  return _prevParams
}

export const useSearchParams = () => {
  return useSyncExternalStore(subscribe, getSnapshot)
}
