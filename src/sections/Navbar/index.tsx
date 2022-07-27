import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Collapsednavbar from "../Collapsednavbar";
import SuspendedProfile from "../Suspendedprofile";
import Tabnamebar from "../Tabnamebar";

export default function Navbar() {


  return (
    <Disclosure as='nav' className=''>
      {({open}) => (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Barra de navegação estendida */}
          <div className='flex items-center justify-between h-16'>
            {/* Nomes da barra de navegação */}
            <Tabnamebar />
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className=' p-1 rounded-full
                    hover:text-white focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-offset-gray-800
                    focus:ring-white'
                >
                  <span className='sr-only'>Notificações</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Perfil suspenso */}
                <SuspendedProfile />
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              {/* Menu hamburguer */}
              <Disclosure.Button
                className=' inline-flex items-center
                  justify-center p-2 rounded-md text-gray-400
                  hover:text-white hover:bg-gray-700 focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800
                  focus:ring-white'
              >
                <span className='sr-only'>Abrir o menu</span>
                {open ? (
                  <XIcon className='block h-6 w-6' />
                  ) : (
                    <MenuIcon className='block h-6 w-6'/>
                    )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className='md:hidden'>
          {/* Barra de navegação recolhida */}
          <Collapsednavbar />
        </Disclosure.Panel>
      </>
      )}
    </Disclosure>
  )
}