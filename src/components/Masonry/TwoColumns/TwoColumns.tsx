import React, { useMemo } from 'react'
import type { FC } from 'react'

import Card from '@/components/Card'
import { containerCx, sectionCx } from '../style'
import type { MasonryProps } from '../types'

const TwoColumns: FC<MasonryProps> = (props) => {
  const { data, loading, handleClickCard } = props

  const leftProducts = useMemo(() => {
    if (!data) return [];

    return data.filter((current: any, index: number) => {
      if (index % 2 === 0) return current;
    }).map((item: any, index: number) => {
      return (
        <Card key={index} id={item.id} title={item.alt_description} user={item.user.first_name} image={item.urls} loading={loading} avatar={item.user.profile_image.medium} onClick={handleClickCard} />
      )
    });
  }, [data, loading, handleClickCard]);

  const rightProducts = useMemo(() => {
    if (!data) return [];

    return data.filter((current: any, index: number) => {
      if (index % 2 !== 0) return current;
    }).map((item: any, index: number) => {
      return (
        <Card key={index} id={item.id} title={item.alt_description} user={item.user.first_name} image={item.urls} loading={loading} avatar={item.user.profile_image.medium} onClick={handleClickCard} />
      )
    });
  }, [data, loading, handleClickCard]);

  return (
    <div className={containerCx(2)}>
      <div className={sectionCx}>
        {leftProducts}
      </div>
      <div className={sectionCx}>
        {rightProducts}
      </div>
    </div>
  )
}

export default TwoColumns