import { Disclosure } from "@headlessui/react";

export default function Tabnamebutton() {
  return (
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
  )
}