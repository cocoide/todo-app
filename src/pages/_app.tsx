import '/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-purple-200 fixed h-full w-full bg-gradient-to-tr overflow-y-auto'>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  )
}
