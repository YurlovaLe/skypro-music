import { TracksType } from '../../App.types.ts';

export type TracklistItemsProps = {
  items: TracksType,
  sortType: string,
  authorsFilter: string[],
  genresFilter: string[],
  nameSearch: string,
  favoriteItems: TracksType,
};
