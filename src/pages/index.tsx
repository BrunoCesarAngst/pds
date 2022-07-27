
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../sections/Layout";
          
const initial = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  return (
    <>
      <Layout>
        <section className="flex flex-col justify-center items-center space-y-5 mt-6 sm:mt-12 md:mt-16">
          <h3 className="text-base text-gray-800 text-center leading-normal sm:text-4xl font-bold capitalize dark:text-gray-100 ">Bem vindo ao seu MYSYS</h3>
            <p className="text-md sm:text-xl text-center text-gray-500 dark:text-gray-200">Conte o que quer fazer.</p>
            <p className="text-md sm:text-xl text-center text-gray-500 dark:text-gray-200">Diga o que é.</p>
            <p className="text-md sm:text-xl text-center text-gray-500 dark:text-gray-200">Monte seu momento.</p>
            <p className="text-md sm:text-xl text-center text-gray-500 dark:text-gray-200">Faça acontecer!</p>
            <button className="btn" type="button" onClick={() => router.push('/login')}>
              {" "}
              Faça você mesmo sua história
            </button>
        </section>
      </Layout>
    </>
  )
}

initial.propTypes = {
  
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  console.log({session});

  if(session) {
    return {
      redirect: {
        destination: '/home',
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
  
export default initial;