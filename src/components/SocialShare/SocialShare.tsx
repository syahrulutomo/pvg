import React from 'react'
import type { FC } from 'react'
import { cx } from '@emotion/css'

import IconThreeDots from '@/components/Icon/ThreeDots'
import IconClose from '@/components/Icon/CloseCircle'
import { iconCx, popupCx , hideCx, closeCx} from './style'

interface DataTypes {
  text: string;
  url: string;
}

interface SocialShareProps {
  data: DataTypes;
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
}

const SocialShare: FC<SocialShareProps> = (props) => {
  const { data, isOpen, onClose, onClick } = props

  const classes = cx(popupCx ,!isOpen && hideCx)

  return (
    <div>
      <IconThreeDots className={iconCx} onClick={onClick} />
      <div className={classes}> 
        <a href={`https://twitter.com/intent/tweet?text=${data.text}\n&url=${data.url}`} target='_blank'>Tweet</a>
        <IconClose className={closeCx} onClick={onClose} />
      </div>
    </div>
  )
}

export default SocialShare