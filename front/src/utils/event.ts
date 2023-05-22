import dayjs from 'dayjs'

export const deserialize = (event: IEventSerializable): IEvent => {
  return {
    ...event,
    time: dayjs(event.time),
  }
}

export const decode = (search: URLSearchParams) => {
  const raw = search.get('json')
  if (!raw) return null
  const json = decodeURIComponent(raw)

  try {
    const event = JSON.parse(json)
    return event as IEventSerializable
  } catch (e) {
    return null
  }
}
