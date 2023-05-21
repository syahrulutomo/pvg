import { Fragment } from 'react'
import Head from 'next/head'

import SearchModule from '@/modules/Search'

const Search = () => {
  return (
    <Fragment>
      <Head>
        <title>Search | PVG Photos</title>
        <meta name="description" content="PVG Photos Search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchModule />
      </main>
    </Fragment>
  )
}

export default Search