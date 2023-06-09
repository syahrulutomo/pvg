import { Fragment } from 'react'
import Head from 'next/head'

import HomeModule from '@/modules/Home'

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>PVG Photos</title>
        <meta name="description" content="PVG Photos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeModule />
      </main>
    </Fragment>
  )
}

export default Home