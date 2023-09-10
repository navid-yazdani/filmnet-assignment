export default interface ContentDataInterface {
  age_restriction: string;
  alter_cover_image: { path: string };
  path: string;
  categories: CategoryInterface[];
  conditional_flag: string;
  cover_image: { path: string };
  duration: string;
  flag: string;
  id: string;
  logo_image: { path: string };
  original_name: string;
  page_title: string;
  poster_image: { path: string };
  published_at: string;
  rate: number;
  short_id: string;
  slug: string;
  status: string;
  summary: string;
  title: string;
  type: string;
  video_content_access_approach: string;
  video_files: { path: string };
  imdb_rank_percent: number;
  year: number;
}

export interface CategoryInterface {
  type: string;
  items: { title: string }[];
}

export interface InfiniteScrollInterface {
  wrapper?: React.ElementType;
  children: React.ReactNode;
  hasMore: boolean;
  next: () => void;
  loader?: React.ReactNode;
}
