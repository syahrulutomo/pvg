export interface LinksType {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface CurrentUserCollectionType {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: any,
  user: any
}

export interface TagsType {
  type: string,
  title: string
}

export interface URLType {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface LinksType {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface UserType {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number
  total_collections: number
  links: LinksType;
}

export interface UnsplashPhotoType {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: CurrentUserCollectionType[];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: 0;
  links: LinksType;
  promoted_at: string;
  slug: string;
  sponsorship: any;
  tags: TagsType[]
  topic_submissions: any;
  updated_at: string;
  urls: URLType;
  user: UserType;
  width: number;
}