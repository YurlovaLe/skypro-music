import { TracksType } from '../../App.types.ts';

export type TracklistProps = {
  items: TracksType,
  favoriteItems: TracksType,
  isLoading: boolean,
  heading: string,
  categories: string[]
};
