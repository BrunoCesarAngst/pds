import { Menu, Transition } from "@headlessui/react"
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { Fragment } from "react"

export default function SuspendedProfile() {
  const {data: session} = useSession()

  const imageUser = session?.user?.image ?? undefined

  const {systemTheme, theme, setTheme} = useTheme();
  
  const renderingThemeChanger = () => {  
    if(systemTheme === theme){
      return (
        <SunIcon
          className="w-9 h-9 text-yellow-500"
          role="button"
          onClick={() => {
            setTheme('light')
        }}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-9 h-9 text-gray-400"
          role="button"
          onClick={() => {
            setTheme('dark')
        }}
        />
      )
    }
  }

  return (
    <Menu as='div' className='ml-2 relative'>
      <div>
        <Menu.Button
          className='max-w-xs  rounded-full flex 
            items-center text-sm focus:outline-none focus:ring-1
            focus:ring-offset-1 focus:ring-offset-gray-800
            focus:ring-white'
        >
          <span className='sr-only'>Abrir o menu do usuário</span>
          <img className='rounded-full h-8 w-8'
            src={imageUser} alt="Logo"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
        <Menu.Items
          className='origin-top-right absolute right-0 mt-5 w-40
            rounded-md shadow-lg py-1 ring-1 ring-opacity-5
            focus:outline-none'
        >
          <div className='ml-5'>
            {renderingThemeChanger()}
          </div>
          <Menu.Item>
            <button
              className='block px-4 py-2 text-sm black:text-white'
              onClick={async () => {await signOut()}}
            > SignOut </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}