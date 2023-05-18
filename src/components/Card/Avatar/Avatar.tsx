import React from 'react'
import type { FC } from 'react'

import { avatarCx } from './style';

interface AvatarProps {
  src: string;
}

const Avatar: FC<AvatarProps> = (props) => {
  const { src } = props

  console.log(src);

  return (
    <div className={avatarCx(src)} />
  )
}

export default Avatar