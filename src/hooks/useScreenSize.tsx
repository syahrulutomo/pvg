import { useState, useEffect } from "react"

const useScreenSize = () => {
  const [screenSize, setSize] = useState({
    width: 0,
    height: 0
  });

  const setDimension = () => {
    if (typeof window !== 'undefined') {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', setDimension);
    }

    return (() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', setDimension);
      }
    })
  }, [screenSize])

  return { screenSize }
}

export default useScreenSize