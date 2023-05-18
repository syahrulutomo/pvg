import React from 'react'

import { containerCx, titleCx, wrapperCx } from './style'

const TopNavigation = () => {
  return (
    <div className={wrapperCx}>
      <div className={containerCx}>
        <h1 className={titleCx}>PVG Photo</h1>
      </div>
    </div>
  )
}

export default TopNavigation