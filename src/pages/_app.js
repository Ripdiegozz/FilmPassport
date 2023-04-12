import '@/styles/globals.css'
import Head from 'next/head'
import { Layout } from '@/components/Index'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Film Passport</title>
        <meta name='description' content='Film Passport' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
