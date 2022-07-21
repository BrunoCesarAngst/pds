import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import Tabs from "../Tabs";

type Props = {
  children: JSX.Element
}

export default function Layout({children}: Props) {
  return (
    <>
      <Head>
        <title>mysys</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <div className="min-h-screen mx-auto flex flex-col">
        <Tabs />        
        <Footer />
      </div>
    </>
  )
}