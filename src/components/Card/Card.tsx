import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import Image from 'next/image'

import Loader from './Loader'
import Avatar from './Avatar'
import { containerCx, imageCx, titleCx, infoContainerCx, avatarContainerCx, userCx } from './style'

interface CardProps {
  title: string;
  user: string;
  image?: any;
  loading: boolean;
  avatar: string;
}

const Card: FC<CardProps> = (props) => {
  const { title, user, image, loading, avatar } = props

  const myLoader = () => {
    return image.regular;
  }

  return (
    <div className={containerCx}>
      {
        loading ? <Loader /> : (
          <div className={imageCx}>
            <Image
              loader={myLoader}
              src="https://images.unsplash.com/photo-1682685797741-f0213d24418c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDk1ODN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NDMxMDMwMHw&ixlib=rb-4.0.3&q=80&w=1080"
              alt='sample image'
              fill
              priority
              style={{ borderRadius: '4px' }}
            />
          </div>
        )
      }
      <div className={infoContainerCx}>
        <p className={titleCx}>{title}</p>
        <div className={avatarContainerCx}>
          <Avatar src={avatar} />
          <p className={userCx}>{user}</p>
        </div>
      </div>
    </div>
  )
}

export default Card