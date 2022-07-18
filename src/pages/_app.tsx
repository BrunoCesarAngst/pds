import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import '../styles/global.css'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionProvider session={session}>
        
        <Component {...pageProps} />

      </SessionProvider>
    </ThemeProvider>

  )
}

export default MyApp
