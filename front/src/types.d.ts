interface IEventSerializable {
  name: string
  time: string
  description?: string
  includeTime?: boolean
}

type IEvent = Omit<IEventSerializable, 'time'> & {
  time: import('dayjs').Dayjs
}

interface IListSerializeable {
  name: string
  events: EventSerializable[]
  description?: string
}
