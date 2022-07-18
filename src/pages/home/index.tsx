import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import Layout from '../../sections/Layout'

function HomePage() {
  const {data: session} = useSession()

  return (
    <>
    <Layout>
      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        <h2 className="text-3xl w-[740px] text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100 ">Seja Muito bem vindo.</h2>
          <p className="text-xl sm:text-md text-center text-gray-500 dark:text-gray-200">Fazendo acontecer</p>
        <button className="btn" type="button" onClick={undefined}>
          {" "}
          Comesse sua história {session?.user?.name}!
        </button>
      </section>
    </Layout>
  </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  console.log({session});

  if(!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export default HomePage