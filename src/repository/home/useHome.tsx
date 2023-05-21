import { useMemo, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetcher } from '@/utils/fetcher';

const useHome = (page: number) => {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['masonry'],
    queryFn: ({ pageParam = 1 }) => fetcher(`https://api.unsplash.com/photos?per_page=12&page=${page}`, {
      method: 'GET',
      headers: {
        "Authorization": `Client-ID ${process.env.NEXT_PUBLIC_CLIENT_KEY}`
      }
    },
    ),
    getNextPageParam: () => page,
    staleTime: 120000
  });

  const normalizedData = useMemo(() => {
    const temp = [] as any;
    if (data) {
      data?.pages.forEach((item) => {
        if (Array.isArray(item)) temp.push(...item);
      })
    }

    return temp;
  }, [data]);

  useEffect(() => {
    fetchNextPage()
  }, [page, fetchNextPage])


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

export default useHome;