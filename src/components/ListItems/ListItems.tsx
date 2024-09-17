import React from 'react';
// import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../store/hooks.ts';
import { Track } from '../Track/Track.tsx';
import { setCurrentTrack } from '../../store/slices.ts';
import { ListItemsProps } from './ListItems.types.ts';

export const ListItems = ({
  items,
  sortType,
  authorsFilter,
  genresFilter,
  nameSearch,
  favoriteItems,
}: ListItemsProps) => {
  const dispatch = useAppDispatch();
  const sortedItems = [...items];
  (sortedItems).sort((a, b) => {
    switch (sortType) {
      case 'Сначала новые': {
        return new Date(a.release_date) > new Date(b.release_date) ? -1 : 1;
      }
      case 'Сначала старые': {
        return new Date(a.release_date) > new Date(b.release_date) ? 1 : -1;
      }
      default: {
        return 0;
      }
    }
  });

  const filteredItems = (sortedItems)
    .filter((item) => {
      if (authorsFilter.length === 0) {
        return true;
      }

      return authorsFilter.includes(item.author);
    })
    .filter((item) => {
      if (genresFilter.length === 0) {
        return true;
      }

      return genresFilter.includes(item.genre);
    })
    .filter((item) => {
      if (!nameSearch) {
        return true;
      }

      return (
        (item.name).toLocaleLowerCase().includes(nameSearch)
        || (item.author).toLocaleLowerCase().includes(nameSearch));
    });

  return filteredItems.map((item) => {
    const isFavorite = !!favoriteItems.find(({ id }) => id === item.id);
    return (
      <Track
        name={item.name}
        singer={item.author}
        album={item.album}
        duration={item.duration_in_seconds}
        trackId={item.id}
        isFavorite={isFavorite}
        key={item.id}
        onClick={() => dispatch(setCurrentTrack({ id: item.id, tracklist: filteredItems }))}
      />
    );
  });
};
