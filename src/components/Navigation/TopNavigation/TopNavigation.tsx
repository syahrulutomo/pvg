import React from 'react'
import type { FC } from 'react'
import { useRouter } from 'next/router'

import { containerCx, titleCx, wrapperCx } from './style'

const TopNavigation: FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className={wrapperCx}>
      <div className={containerCx}>
        <h1 className={titleCx} onClick={handleClick}>PVG Photo</h1>
      </div>
    </div>
  )
}

export default TopNavigation