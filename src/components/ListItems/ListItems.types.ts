import { TracksType } from '../../App.types.ts';

export type ListItemsProps = {
  items: TracksType,
  sortType: string,
  authorsFilter: string[],
  genresFilter: string[],
  nameSearch: string,
  favoriteItems: TracksType,
};
