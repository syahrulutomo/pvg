import React from 'react'

import { containerCx, inputCx} from './style'

const Search = () => {
  return (
    <div className={containerCx}>
      <input className={inputCx} type="text" name="" id="" placeholder='Search' />
    </div>
  )
}

export default Search