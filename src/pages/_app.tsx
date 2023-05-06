
import '@/styles/index.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link> {
    //manera de colocar una libreria importada
  }
    <Component {...pageProps} />
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  </>
}
