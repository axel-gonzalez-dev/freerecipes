import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Import layout
import Layout from '@/utilities/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}
