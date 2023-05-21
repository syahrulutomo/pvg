import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetcher } from '@/utils/fetcher'


const useSearch = (query: string | string[] | undefined = '',page: number) => {
  const router = useRouter()
  const [keyword, setKeyword] = useState(query)
  const { 
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['masonry'],
    queryFn: ({ pageParam = 1 }) => fetcher(`https://api.unsplash.com/search/photos?query=${keyword}&per_page=12&page=${page}`, {
      method: 'GET',
      headers: {
        "Authorization": `Client-ID ${process.env.NEXT_PUBLIC_CLIENT_KEY}`
      }
    }), 
    getNextPageParam: () => page,
    staleTime: 120000
  });

  const normalizedData = useMemo(() => {
    const temp = [] as any;
    if (data) {
      data?.pages.forEach((item: any) => {
        if (item.results) temp.push(...item.results);
      })
    }

    return temp;
  }, [data]);

  useEffect(() => {
    console.log(query)
    if (query !== keyword) {
      setKeyword(query)
      router.reload()
    }
  }, [query, keyword, router, setKeyword])
  

  return {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    collectedData: normalizedData,   
  };
}

export default useSearch;