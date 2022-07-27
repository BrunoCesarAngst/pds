import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { Fragment } from "react";

export default function Teste() {
  const {systemTheme, theme, setTheme} = useTheme();
  const renderThemeChanger = () => {  
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
    <div className='min-h-full '>
      <Disclosure as='nav' className=''>
        {({open}) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <img
                    className='rounded-full h-8 w-8'
                    src="/images/eu.png" alt="Logo"
                  />
                </div>
                <div className='hidden md:block'>
                  <div className='ml-10 flex items-baseline space-x-4"'>
                    <a className='px-3 py-2 rounded-md text-sm font-medium
                      hover:text-lg'>Painel de controle</a>
                    <a className='px-3 py-2 rounded-md text-sm font-medium
                      hover:text-lg'>Caixa de entrada</a>
                    <a className='px-3 py-2 rounded-md text-sm font-medium
                      hover:text-lg'>Listas</a>
                    <a className='px-3 py-2 rounded-md text-sm font-medium
                      hover:text-lg'>projetos</a>
                    <a className='px-3 py-2 rounded-md text-sm font-medium
                      hover:text-lg'>Mapa</a>
                  </div>
                </div>
              </div>
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
                          src="/images/eu.png" alt="Logo"
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
                          {renderThemeChanger()}
                        </div>
                        <Menu.Item>
                          <a className='block px-4 py-2 text-sm black:text-white'>
                            SignOut
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className='-mr-2 flex md:hidden'>
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
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Disclosure.Button className=''>
                <a className='block left-0 px-3 py-2 rounded-md text-left
                  font-medium hover:text-lg'
                >Painel de controle</a>
                <a className='block left-0 px-3 py-2 rounded-md text-left
                  font-medium hover:text-lg'
                >Caixa de entrada</a>
                <a className='block left-0 px-3 py-2 rounded-md text-left
                  font-medium hover:text-lg'
                >Listas</a>
                <a className='block left-0 px-3 py-2 rounded-md text-left
                  font-medium hover:text-lg'
                >Projetos</a>
                <a className='block left-0 px-3 py-2 rounded-md text-left
                  font-medium hover:text-lg'
                >Mapa</a>
              </Disclosure.Button>
            </div>
            <div className='pt-4 pb-3 border-t border-gray-700'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <img className='rounded-full h-8 w-8'
                    src="/images/eu.png" alt="Logo"
                  />       
                </div>
                <div className='ml-3'>
                  <div
                    className='text-base font-medium leading-none'
                  > Nome
                  </div>
                  <div 
                    className='text-sm font-medium leading-none'
                  >Email
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 p-1
                  rounded-full hover:text-lg
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-offset-gray-800 focus:ring-white"'
                  >
                  <span className='sr-only'>Notificações</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 px-3 space-y-1'>
                <div className='mt-5 ml-3 mb-2 '>
                  {renderThemeChanger()}
                </div>
                <Disclosure.Button
                  className='block px-3 py-2 rounded-md text-left font-medium hover:text-lg'
                >
                  <a>SignOut</a>
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
        )}
      </Disclosure>

      {/* Dashboard */}
      <header className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}