import React from 'react'
// import { URLSearchParams } from 'url'
import '../src/view/styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import Head from 'next/head'

const fetcher = async (...args: [string, Record<string, string | ReadonlyArray<string>> | undefined]) => {
  const [rawUrl, queryParams] = args
  // @ts-ignore
  const queryString = queryParams ? `?${(new URLSearchParams(queryParams)).toString()}` : ''
  const url = `${rawUrl}${queryString}`

  return await fetch(url).then(res => res.json())
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={{ fetcher }} >
      <Head>
        <title>Cosuno Tech Challenge</title>
        <meta name="description" content="Tech challenge included into a FullStack open position process." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
