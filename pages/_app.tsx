import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/view/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Cosuno Tech Challenge</title>
        <meta name="description" content="Tech challenge included into a FullStack open position process." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
