import React, { Fragment } from 'react'
import type { ReactNode } from 'react'

import { containerCx } from './style'
import TopNavigation from '@/components/Navigation/TopNavigation/TopNavigation'

interface DefaultLayoutProps {
  children: ReactNode | ReactNode[]
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Fragment>
      <TopNavigation />
      <div className={containerCx}>
        {children}
      </div>
    </Fragment>
  )
}

export default DefaultLayout