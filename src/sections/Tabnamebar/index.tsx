import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Home from "../Tabs/Home";

type ClassNames = string

function classNames(...classes: ClassNames[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabnamebar() {

  type ITabProps = {
    slug: string
    label: string
    active: Boolean
    component: ReactNode
  }

  const tabs: ITabProps[] = [
    { slug: 'home', label: 'Painel de Controle', active: true, component: <Home /> },
    { slug: 'Inbox', label: 'Caixa de Entrada', active: false, component: '#' },
    // { slug: 'lists', label: 'Listas', active: false, component: '#' },
    // { slug: 'projects', label: 'Projetos', active: false, component: '#' },
    // { slug: 'map', label: 'Mapa', active: false, component: '#' },
  ]

  const router = useRouter()
  const currentPath = router.pathname

  const findSlugMatchingCmp = () =>tabs.find(
    (cmp => {
      return cmp.slug === currentPath.slice(1)
    })
  )

  useEffect(()=>{
    const foundComponent = findSlugMatchingCmp()

    if(currentPath && !foundComponent) router.push('/404')
  }, [router])

  const cmp = findSlugMatchingCmp()?.component

  // console.log(cmp);

  return (
    <div className='flex items-center'>
      <div className='flex-shrink-0'>
        <img
          className='rounded-full h-8 w-8'
          src="/images/eu.png" alt="Logo"
        />
      </div>
      <div className='hidden md:block'>
        <div className='ml-10 flex items-baseline space-x-4'>
          { tabs.map(tab => (
            <a
              key={tab.slug}
              href={tab.slug}
              className={classNames(
                tab.active ? 'text-lg'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium hover:text-lg'
              )}
              aria-current={tab.active ? 'page' : undefined}
            >{tab.label}</a>
          )) }
        </div>
      </div>
        {/* {cmp} */}
    </div>
  )
}