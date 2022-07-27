import { BellIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Signoutbutton from "../Signoutbutton";
import Tabnamebutton from "../Tabnamebutton";
import Userinfo from "../Userinfo";

export default function Collapsednavbar() {
  
  const {data: session} = useSession()
  const {systemTheme, theme, setTheme} = useTheme();

  const imageUser = session?.user?.image ?? undefined
  
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
    <>
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        {/* Botão com os nomes de navegação */}
        <Tabnamebutton />
      </div>
      <div className='pt-4 pb-3 border-t border-gray-700'>
        <div className='flex items-center px-5'>
          <div className='flex-shrink-0'>
            <img className='rounded-full h-8 w-8'
              src={imageUser} alt="Logo"
            />       
          </div>
          <div className='ml-3'>
            {/* Info do usuário */}
            <Userinfo />
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
            {renderingThemeChanger()}
          </div>
          {/* Botão de saida */}
          <Signoutbutton />
        </div>
      </div>
    </>
  )
}