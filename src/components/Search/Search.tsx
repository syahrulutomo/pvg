import React, { useState, useCallback } from 'react'
import type { FC, ChangeEvent, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'

import { containerCx, inputCx} from './style'

const Search: FC = () => {
  const [input, setInput] = useState('')
  const router = useRouter()

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.currentTarget.value)
    },
    [],
  )

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      router.push(`/search?q=${input}`)
    }
  }, [router, input])
  
  return (
    <div className={containerCx}>
      <input className={inputCx} type="text" id="search-input" placeholder='Search' value={input} onChange={handleChangeInput} onKeyDown={handleKeyPress} />
    </div>
  )
}

export default Search