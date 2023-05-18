import { useQuery } from '@tanstack/react-query'
import { fetcher } from '@/utils/fetcher';

const useHome = () => {
  const { isLoading, error, data } = useQuery({ queryKey: ['masonryData'], queryFn: () =>
    fetcher('https://api.unsplash.com/photos?page=1', {
      method: 'GET',
      headers: {
        "Authorization": `Client-ID ${process.env.NEXT_PUBLIC_CLIENT_KEY}`
      }
    })
  });

  return { isLoading, error, data };
}

export default useHome;