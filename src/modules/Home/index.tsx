import React from 'react'

import DefaultLayout from '@/components/Layout/DefaultLayout'
import Search from '@/components/Search'
import Masonry from '@/components/Masonry'
import useHome from '@/repository/home/useHome'

const Home = () => {
  const { isLoading, error, data } = useHome();

  return (
    <DefaultLayout>
      <Search />
      <Masonry data={data} loading={isLoading} />
    </DefaultLayout>
  )
}

export default Home