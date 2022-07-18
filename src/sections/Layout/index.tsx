import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>mysys</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <div className="min-h-screen mx-auto max-w-2xl flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}