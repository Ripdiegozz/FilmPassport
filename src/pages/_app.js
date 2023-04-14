import '@/styles/globals.css'
import Head from 'next/head'
import { Layout } from '@/components/Index'
import { Toaster } from 'react-hot-toast'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Film Passport</title>
        <meta name='description' content='Film Passport' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
