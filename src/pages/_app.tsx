import '/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='from-white via-purple-200 to-blue-200 h-screen bg-gradient-to-tr'>
      <Component {...pageProps} />
    </div>
  )
}
