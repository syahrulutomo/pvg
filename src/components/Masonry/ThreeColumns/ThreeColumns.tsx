import React, { useMemo } from 'react'
import type { FC } from 'react'

import Card from '@/components/Card'
import { sectionCx, containerCx } from '../style'
import type { MasonryProps } from '../types'

const ThreeColumns: FC<MasonryProps> = (props) => {
  const { data, loading } = props

  const leftProducts = useMemo(() => {
    if (!data) return [];

    if (data.length > 0) {
      return data.filter((current: any, index: number) => {
        if (index % 3 === 0) return current;
      }).map((item: any, index: number) => {
        return (
          <Card key={index} title={item.alt_description} user={item.user.first_name} image={item.urls} loading={loading} avatar={item.user.profile_image.medium} />
        )
      });
    }
  }, [data, loading]);

  const middleProducts = useMemo(() => {
    if (!data) return [];

    if (data.length > 0) {
      return data.filter((current: any, index: number) => {
        if (index % 3 === 1) return current;
      }).map((item: any, index: number) => {
        return (
          <Card key={index} title={item.alt_description} user={item.user.first_name} image={item.urls} loading={loading} avatar={item.user.profile_image.medium} />
        )
      });
    }
  }, [data, loading]);

  const rightProducts = useMemo(() => {
    if (!data) return [];

    if (data.length > 0) {
      return data.filter((current: any, index: number) => {
        if (index % 3 === 2) return current;
      }).map((item: any, index: number) => {
        return (
          <Card key={index} title={item.alt_description} user={item.user.firstname} image={item.urls} loading={loading} avatar={item.user.profile_image.medium} />
        )
      });
    }
  }, [data, loading]);

  return (
    <div className={containerCx(3)}>
      <div className={sectionCx}>
        {leftProducts}
      </div>
      <div className={sectionCx}>
        {middleProducts}
      </div>
      <div className={sectionCx}>
        {rightProducts}
      </div>
    </div>
  )
}

export default ThreeColumns