import type { URLType } from '@/models/types'
import type { UnsplashPhotoType } from '@/models/types';

export interface MasonryProps {
  data: UnsplashPhotoType[];
  loading: boolean;
  handleClickCard: (image: URLType) => void;
}