import dayjs, { Dayjs } from 'dayjs'
import { FC } from 'react'

interface Props {
  name: string
  time: Dayjs
}

export const Event: FC<Props> = ({ name, time }) => {
  const now = dayjs()
  const diff = time.diff(now, 'day')

  const [word, duration, colors] =
    diff < 0
      ? ['已过去', -diff, ['text-red-3', 'text-red-3', 'text-red-3']]
      : ['还有', diff, ['text-red-7', 'text-red-8', 'text-red-9']]

  return (
    <div className="my-4 break-keep">
      <span className={`text-4 ${colors[0]}`}>距离</span>
      <span className={`text-6 mx-1 ${colors[2]}`}>{name}</span>
      <wbr />
      <span className={`text-4 ${colors[0]}`}>{word}</span>
      <span className={`text-6 mx-1 ${colors[2]}`}>{duration}</span>
      <span className={`text-4 ${colors[0]}`}>天</span>
    </div>
  )
}
