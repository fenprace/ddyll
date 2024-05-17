import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { useSearchParams } from '../hooks/useSearchParams'
import { dayjs } from '../utils/dayjs'
import { decode, deserialize } from '../utils/event'

const DateWithTime = ({ time }) => {
  const dura = dayjs.duration(time.diff())

  return (
    <span>
      {Math.floor(dura.asDays())} 天 {dura.hours()} 小时 {dura.minutes()} 分钟{' '}
      {dura.seconds()} 秒
    </span>
  )
}

const DateWithoutTime = ({ time }) => {
  const dura = dayjs.duration(time.diff())

  return (
    <>
      <span className={`text-16 mx-1`}>{Math.floor(dura.asDays())}</span>
      <span className={`text-8`}>天</span>
    </>
  )
}

export const EventPage = () => {
  const search = useSearchParams()
  const [event, setEvent] = useState<null | IEvent>(null)

  useEffect(() => {
    const eventSerializable = decode(search)
    if (eventSerializable) setEvent(deserialize(eventSerializable))
  }, [search])

  if (!event)
    return (
      <div className="font-sans w-screen overflow-auto min-h-screen bg-#f9f3f3 text-black">
        <div className="max-w-xl px-4 mx-auto">
          <Header />
        </div>
      </div>
    )

  const now = dayjs()
  const diff = event.time.diff(now, 'day')

  const [word, colors] =
    diff < 0
      ? ['已过去', ['text-red-3', 'text-red-3', 'text-red-3']]
      : ['还有', ['text-red-7', 'text-red-8', 'text-red-9']]

  return (
    <div className="font-sans w-screen overflow-auto min-h-screen bg-#f9f3f3 text-black">
      <div className="max-w-xl px-4 mx-auto">
        <Header />
        {event && (
          <div className="my-4 break-keep">
            <span className={`text-8 ${colors[0]}`}>距离</span>
            <span className={`text-8 mx-1 ${colors[2]}`}>{event.name}</span>
            <span className={`text-8 ${colors[0]}`}>{word}</span>
            <br />
            {event.includeTime ? (
              <DateWithTime time={event.time} />
            ) : (
              <DateWithoutTime time={event.time} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
