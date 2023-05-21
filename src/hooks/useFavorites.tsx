import { useEffect, useState, useMemo } from "react"

const useFavorites = (id: string) => {
  const [favorites, setFavorites] = useState<string[]>([])
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favs = localStorage.getItem('pvg_favorites')
      setFavorites(JSON.parse(String(favs)))
    }
  }, [])

  const hasChoosen = useMemo(() => {
    if (favorites.length > 0 ) {
      return favorites.some((item) => item === id) 
    }

    return false
  }, [favorites, id])

  return { favorites, hasChoosen }
}

export default useFavorites