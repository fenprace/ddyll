import { usePathname } from '../hooks/usePathname'
import { EventPage } from './Event'
import { Home } from './Home'

export const Root = () => {
  const pathname = usePathname()

  if (pathname === '/event') return <EventPage />

  return <Home />
}
