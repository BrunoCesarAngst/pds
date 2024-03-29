/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { LightningBoltIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import { GetServerSideProps } from 'next'
import { getSession, useSession, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

const navigation = [
  { name: 'Painel de Controle', href: '#', current: true },
  { name: 'Caixa de Entrada', href: '#', current: false },
  { name: 'Listas', href: '#', current: false },
  { name: 'Projetos', href: '#', current: false },
  { name: 'Mapa', href: '#', current: false },
]

// const sign_out = () => {signOut()}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', onClick: [() => signOut()] },
]

type ClassNames = string

function classNames(...classes: ClassNames[]) {
  return classes.filter(Boolean).join(' ')
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  console.log({session});

  return {
    props: {
      session
    }
  }
}

export default function Tabs() {
  const {data: session} = useSession()

  const imageUser = session?.user?.image ?? undefined

  const {systemTheme, theme, setTheme} = useTheme();
  
    const renderThemeChanger= () => {
  
        const currentTheme = theme === "system" ? systemTheme : theme ;
  
        if(currentTheme === "dark"){
          return (
            <SunIcon className="w-9 h-9  text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }
  
        else {
          return (
            <MoonIcon className="w-9 h-9 text-gray-400 " role="button" onClick={() => setTheme('dark')} />
          )
        }
    };
    
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="h-auto">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <Image /> */}
                      <Link href="/">
                        <a className="my-2 flex items-center space-x-1 text-indigo-500">
                          <LightningBoltIcon  className="h-8 w-8 flex-shrink-0 mr-3"/>
                          <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">MYSYS</span>
                        </a>    
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                {/* {renderThemeChanger()} */}
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={imageUser} alt="eu"/>
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
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                          )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full" src={imageUser} alt="eu"/>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{session?.user?.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{session?.user?.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className=" dark:border-gray-700">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900  dark:text-gray-100">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-60"></div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}
