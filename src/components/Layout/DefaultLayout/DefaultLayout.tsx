import React, { Fragment } from 'react'
import type { FC, ReactNode } from 'react'

import TopNavigation from '@/components/Navigation/TopNavigation'
import Search from '@/components/Search'

import { containerCx } from './style'

interface DefaultLayoutProps {
  children: ReactNode | ReactNode[]
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <TopNavigation />
      <Search />
      <div className={containerCx}>
        {children}
      </div>
    </Fragment>
  )
}

export default DefaultLayout