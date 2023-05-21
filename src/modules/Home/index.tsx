import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'

import useIOLazyLoad from '@/hooks/useIOLazyLoad'
import useHome from '@/repository/home/useHome'
import DefaultLayout from '@/components/Layout/DefaultLayout'
import Masonry from '@/components/Masonry'
import Lightbox from '@/components/Lightbox'
import IconLoad from '@/components/Icon/Autorenew'
import { buttonCx } from './style'
import type { URLType } from '@/models/types'

const Home = () => {
  const [page, setPage] = useState(1)
  const [isClicked, setIsClicked] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<URLType>({
    raw: '',
    full: '',
    regular: '',
    small: '',
    thumb: '',
  })
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const {
    collectedData,
    data,
    error,
    isFetching,
    fetchNextPage,
  } = useHome(page);
  const router = useRouter()

  const { ref, inView, entry, isLoaded } = useIOLazyLoad(isFetching, data);

  const handleClickLoadMore = useCallback(() => {
    setPage(prev => prev + 1);
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 500)
  }, [setPage])

  const handleClickCard = useCallback((image: URLType) => {
    setLightboxImage(image ?? '')
    setIsLightboxOpen(true)
  }, [])

  useEffect(() => {
    if (entry && inView && isLoaded) {
      setPage(prev => prev + 1)
      // const offsetTop = Number(entry.target)
      // if (typeof window !== undefined) window.scrollTo(0, offsetTop - 120)
    }
  }, [entry, fetchNextPage, inView, isLoaded])

  if (error) router.push('/error')

  return (
    <DefaultLayout>
      <div>
        <Masonry data={collectedData} loading={isFetching} handleClickCard={handleClickCard} />
        <button className={buttonCx(isClicked)} onClick={handleClickLoadMore} ref={ref}>
          <IconLoad />
        </button>
      </div>
      <Lightbox
        isOpen={isLightboxOpen}
        src={lightboxImage?.regular}
        onClose={() => setIsLightboxOpen(false)}
      />
    </DefaultLayout>
  )
}

export default Home