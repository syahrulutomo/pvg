import { useMemo } from 'react'
import type { FC } from 'react'

import useScreenSize from '@/hooks/useScreenSize'
import TwoColumns from './TwoColumns'
import ThreeColumns from './ThreeColumns'
import type { MasonryProps } from './types'


const Masonry: FC<MasonryProps> = (props) => {
  const { data, loading } = props
  
  const { screenSize } = useScreenSize();

  const renderColumn = useMemo(() => {
    if (screenSize.width < 600) return <TwoColumns  data={data} loading={loading} />

    return <ThreeColumns data={data} loading={loading} />
  }, [screenSize, data, loading]) 

  return renderColumn
}

export default Masonry