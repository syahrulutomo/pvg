import { useMemo } from 'react'
import type { FC } from 'react'

import useScreenSize from '@/hooks/useScreenSize'
import TwoColumns from './TwoColumns'
import ThreeColumns from './ThreeColumns'
import type { MasonryProps } from './types'

const Masonry: FC<MasonryProps> = (props) => {
  const { data, loading, handleClickCard } = props
  
  const screenSize = useScreenSize();

  const renderColumn = useMemo(() => {
    if (screenSize?.width as any < 600) return <TwoColumns data={data} loading={loading} handleClickCard={handleClickCard} />

    return <ThreeColumns data={data} loading={loading} handleClickCard={handleClickCard} />
  }, [screenSize, data, loading, handleClickCard]) 

  return renderColumn
}

export default Masonry