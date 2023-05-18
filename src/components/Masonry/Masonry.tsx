import { useMemo } from 'react'

import useScreenSize from '@/hooks/useScreenSize'
import Card from '@/components/Card'
import TwoColumns from './TwoColumns'
import ThreeColumns from './ThreeColumns'
import { containerCx, sectionCx } from './style'

const Masonry = () => {
  const { screenSize } = useScreenSize();

  const renderColumn = useMemo(() => {
    if (screenSize.width < 500) return <TwoColumns />

    return <ThreeColumns />
  }, [screenSize]) 

  return renderColumn
}

export default Masonry