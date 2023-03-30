import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
    <Header>
    <Component {...pageProps} />
    </Header>
  </RecoilRoot>
  )
}

export default MyApp
