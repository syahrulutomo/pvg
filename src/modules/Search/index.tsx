import React, { useState, useCallback, useEffect, useMemo } from 'react'
import type { FC } from 'react'
import { useRouter } from 'next/router'

import useSearch from '@/repository/search/useSearch'
import useIOLazyLoad from '@/hooks/useIOLazyLoad'
import DefaultLayout from '@/components/Layout/DefaultLayout'
import Masonry from '@/components/Masonry'
import Lightbox from '@/components/Lightbox'
import IconLoad from '@/components/Icon/Autorenew'
import { buttonCx } from '../Home/style'
import { URLType } from '@/models/types'

const Search: FC = () => {
  const router = useRouter()
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
  const keyword = useMemo(() => {
    const key = router.asPath.split('?q=')
    return key[1]
  }, [router]);

  const { collectedData, error, isFetching, fetchNextPage } = useSearch(keyword, page)
  const { ref, inView, entry, isLoaded } = useIOLazyLoad(isFetching, collectedData);

  const handleClick = useCallback(() => {
    setPage(prev => prev + 1);
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 500)
  }, [setPage]);

  const handleClickCard = useCallback((image: any) => {
    setLightboxImage(image)
    setIsLightboxOpen(true)
  }, [])

  useEffect(() => {
    fetchNextPage()
  }, [page, fetchNextPage])

  useEffect(() => {
    if (entry && inView && isLoaded) {
      setPage(prev => prev + 1)
      const offsetTop = Number(entry.target) as any
      if (typeof window !== undefined) window.scrollTo(0, offsetTop - 120)
    }
  }, [entry, fetchNextPage, inView, isLoaded])

  if (error) router.push('/error')

  return (
    <DefaultLayout>
      <Masonry data={collectedData} loading={isFetching} handleClickCard={handleClickCard} />
      <button className={buttonCx(isClicked)} onClick={handleClick} ref={ref}>
        <IconLoad />
      </button>
      <Lightbox
        isOpen={isLightboxOpen}
        src={lightboxImage?.regular}
        onClose={() => setIsLightboxOpen(false)}
      />
    </DefaultLayout>
  )
}

export default Search