import { QRCodeCanvas } from 'qrcode.react'
import { useEffect, useState } from 'react'
import { Event } from '../components/Event'
import { Header } from '../components/Header'
import { useSearchParams } from '../hooks/useSearchParams'
import { decode, deserialize } from '../utils/event'

export const EventPage = () => {
  const search = useSearchParams()
  const [event, setEvent] = useState<null | IEvent>(null)

  useEffect(() => {
    const eventSerializable = decode(search)
    if (eventSerializable) setEvent(deserialize(eventSerializable))
  }, [search])

  return (
    <div className="font-sans w-screen overflow-auto min-h-screen bg-#f9f3f3 text-black">
      <div className="max-w-xl px-4 mx-auto">
        <Header />
        {event && <Event name={event?.name} time={event.time} />}
        <QRCodeCanvas
          value={window.location.href}
          bgColor="rgba(0, 0, 0, 0)"
          fgColor="rgb(127, 29, 29)"
          level="L"
          size={128}
        />
      </div>
    </div>
  )
}
