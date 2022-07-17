import { useSession } from 'next-auth/react'
import Head from 'next/head'

function HomePage() {
  const {data: session} = useSession()

  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>mySys</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      Welcome to MYSYS {session?.user?.name}!
    </main>
    <footer className="flex items-center justify-center w-full h-24 border-t">
    <p className="mt-1 text-[11px]">
      Informações do app. Essa versão é de {process.env.NODE_ENV}, com o nome {process.env.PROJECT_NAME} na url: {process.env.NEXT_PUBLIC_API_URL ?? 'indefinida'} 
    </p>
    </footer>
  </div>
  )
}

export default HomePage