import React from 'react'

import DefaultLayout from '@/components/Layout/DefaultLayout'
import Search from '@/components/Search'
import Masonry from '@/components/Masonry'

const Home = () => {
  return (
    <DefaultLayout>
      <Search />
      <Masonry />
    </DefaultLayout>
  )
}

export default Home