import React from 'react'

import { loaderCx } from './style'
import { cx } from '@emotion/css'

const Loader = () => {

  const classes = cx('shimmer', loaderCx)

  return (
    <div className={classes} />
  )
}

export default Loader