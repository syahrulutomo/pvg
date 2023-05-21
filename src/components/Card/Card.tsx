import React, { useState, useCallback } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useFavorites from '@/hooks/useFavorites'
import SocialShare from '@/components/SocialShare'
import Avatar from './Avatar'
import Favorite from './Favorite'
import Loader from './Loader'
import { containerCx, imageCx, titleCx, infoContainerCx, avatarContainerCx, userCx } from './style'
import type { URLType } from '@/models/types'

interface CardProps {
  id: string;
  title: string;
  user: string;
  image: URLType;
  loading: boolean;
  avatar: string;
  onClick: (image: URLType) => void;
}

const Card: FC<CardProps> = (props) => {
  const { id, title, user, image, loading, avatar, onClick } = props
  const [isSocialOpen, setIsSocialOpen] = useState(false)
  const { favorites, hasChoosen } = useFavorites(id)
  const router = useRouter()

  const myLoader = () => {
    return image.small;
  }

  const _onClick = useCallback(() => {
    onClick(image)
  }, [onClick, image])

  const handleClickFavorite = useCallback(() => {
    localStorage.setItem('pvg_favorites', JSON.stringify([...favorites, id]))
    router.reload()
  }, [favorites, id, router])

  return (
    loading ? <Loader />
      : (
        <div className={containerCx}>
          <Favorite isFilled={hasChoosen} onClick={handleClickFavorite} />
          <div className={imageCx} onClick={_onClick}>
            <Image
              loader={myLoader}
              src={image.regular}
              alt={title}
              fill
              sizes='(max-width: 400px) 100vw'
              priority
              style={{ borderRadius: '4px' }}
            />
          </div>

          <div className={infoContainerCx}>
            <p className={titleCx}>{title}</p>
            <div className={avatarContainerCx}>
              <Avatar src={avatar ?? ''} />
              <p className={userCx}>{user}</p>
            </div>
            <SocialShare data={{ text: title, url: image.regular }} isOpen={isSocialOpen} onClick={() => setIsSocialOpen(true)} onClose={() => setIsSocialOpen(false)} />
          </div>
        </div>
      )
  )
}

export default Card