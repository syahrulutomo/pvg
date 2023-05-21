import React from 'react'
import type { FC } from 'react'
import { cx } from '@emotion/css'

import IconFavorite from '@/components/Icon/FavoriteFill'
import { favoriteCx, filledCx } from './style'

interface FavoriteProps {
  isFilled: boolean;
  onClick: () => void;
}

const Favorite: FC<FavoriteProps> = ({ isFilled, onClick }) => {
  const classes = cx(favoriteCx, isFilled && filledCx)

  return (
    <IconFavorite className={classes} onClick={onClick} />
  )
}

export default Favorite