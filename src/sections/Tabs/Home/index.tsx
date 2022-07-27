/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import Navbar from '../../Navbar'
// import { RenderingThemeChanger, Icons, Theme } from '../../components/RenderingThemeChanger'

const navigation = [
  { name: 'Painel de Controle', href: '#', current: true },
  { name: 'Caixa de Entrada', href: '#', current: false },
  { name: 'Listas', href: '#', current: false },
  { name: 'Projetos', href: '#', current: false },
  { name: 'Mapa', href: '#', current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

// type ClassNames = string

// function classNames(...classes: ClassNames[]) {
//   return classes.filter(Boolean).join(' ')
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context)
//   console.log({session});

//   return {
//     props: {
//       session
//     }
//   }
// }

export default function Home() {

  return (
    <div className='min-h-full '>
      {/* Barra de navegação */}
      <Navbar />

      {/* Painel de controle */}
      <header className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Painel de controle</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-64" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}