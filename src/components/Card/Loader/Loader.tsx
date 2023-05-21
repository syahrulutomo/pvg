import React from 'react'
import type { FC } from 'react'
import { cx } from '@emotion/css'

import { loaderCx } from './style'

const Loader: FC = () => {
  const classes = cx('shimmer', loaderCx)
  return (
    <div className={classes} />
  )
}

export default Loader