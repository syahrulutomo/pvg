import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import type { InfiniteData } from '@tanstack/react-query'
import type { UnsplashPhotoType } from '@/models/types';

const useIOLazyLoad = (loading: boolean, data: InfiniteData<UnsplashPhotoType> | undefined) => {
  const defaultThreshold = [.75, 1];

  const { ref, inView, entry } = useInView({
    threshold: defaultThreshold,
  });

  const isLoaded =  useMemo(() => {
    if (data && !loading) return true
    return false
  }, [loading, data])

  return {
    ref,
    inView,
    entry, 
    isLoaded
  }
}

export default useIOLazyLoad;