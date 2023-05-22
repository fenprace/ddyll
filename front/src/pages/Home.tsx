import dayjs from 'dayjs'
import { v1 } from 'uuid'
import { Event } from '../components/Event'
import { Header } from '../components/Header'

const EVENTS = [
  { name: '《塞尔达传说：王国之泪》发售', time: dayjs('2023-05-12'), id: v1() },
  { name: '《最终幻想 XVI》发售', time: dayjs('2023-06-22'), id: v1() },
  {
    name: '《牧场物语Welcome！美丽人生》发售',
    time: dayjs('2023-06-22'),
    id: v1(),
  },
  { name: '《街霸 6》发售', time: dayjs('2023-06-02'), id: v1() },
]

export const Home = () => {
  return (
    <div className="font-sans w-screen overflow-auto min-h-screen bg-#fff0f0 text-black">
      <div className="max-w-xl px-4 mx-auto">
        <Header />
        <div className="flex flex-row flex-nowrap flex-justify-center flex-items-center">
          <div>
            {EVENTS.map((event) => {
              return (
                <Event name={event.name} key={event.id} time={event.time} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
