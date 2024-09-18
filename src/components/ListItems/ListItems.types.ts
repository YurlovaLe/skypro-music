import { TracksType } from '../../App.types';

export type ListItemsProps = {
  items: TracksType,
  sortType: string,
  authorsFilter: string[],
  genresFilter: string[],
  nameSearch: string,
  favoriteItems: TracksType,
};
