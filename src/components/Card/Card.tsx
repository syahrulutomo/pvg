import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import Image from 'next/image'

import Loader from './Loader'
import { containerCx, imageCx } from './style'

interface CardProps {
  title: string;
  subtitle: string;
  image?: any;
}

const Card: FC<CardProps> = (props) => {
  const { title, subtitle, image } = props

  const [loading, setLoading] = useState(false)

  const myLoader = () => {
    return `https://images.unsplash.com/photo-1682685797741-f0213d24418c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDk1ODN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NDMxMDMwMHw&ixlib=rb-4.0.3&q=80&w=1080`;
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 10000);
  }, [])


  return (
    <div className={containerCx}>
      {/* <div className={imageCx}>
        <Image
          loader={myLoader}
          src="https://images.unsplash.com/photo-1682685797741-f0213d24418c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDk1ODN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NDMxMDMwMHw&ixlib=rb-4.0.3&q=80&w=1080"
          alt='sample image'
          width={200}
          height={200}
          priority
        />
      </div> */}
      <div>
        <Loader /> 
      </div>
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Card