import { useSyncExternalStore } from 'react'

const subscribe = (cb: EventListenerOrEventListenerObject) => {
  window.addEventListener('popstate', cb)
  return () => window.removeEventListener('popstate', cb)
}

const getSnapshot = () => {
  return window.location.pathname
}

export const usePathname = () => {
  return useSyncExternalStore(subscribe, getSnapshot)
}
