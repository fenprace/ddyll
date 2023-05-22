import logo from '../assets/ddyll.svg'

export const Header = () => {
  return (
    <div className="h-16 mb-4 flex flex-row flex-nowrap flex-items-center">
      <img src={logo} alt="logo" className="w-6 h-6" />
      <span className="ml-1 text-red-9">大的要来了</span>
    </div>
  )
}
