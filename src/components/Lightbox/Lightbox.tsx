import React from 'react'
import Image from 'next/image'
import type { FC } from 'react'
import { cx } from '@emotion/css'

import { backdropCx, imageWrapperCx, hideCx } from './style'

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

const Lightbox: FC<LightboxProps> = (props) => {
  const { isOpen, onClose, src } = props

  const myLoader = () => {
    return src;
  }

  const backdropClasses =  cx(backdropCx, !isOpen && hideCx)
  const imageWrapperClasses =  cx(imageWrapperCx, !isOpen && hideCx)

  return (
    <div>
      <div className={backdropClasses} onClick={onClose} />
      <div className={imageWrapperClasses}>
        <Image
          loader={myLoader}
          src={src}
          alt='sample image'
          fill
          priority
          style={{ borderRadius: '4px' }}
        />
      </div>
    </div>
  )
}

export default Lightbox