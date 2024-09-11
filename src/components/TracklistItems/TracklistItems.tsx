import React from 'react';
import { useDispatch } from 'react-redux';
import { Track } from '../Track/Track.tsx';
import { useLikeClick } from '../../hooks/useLikeClick.ts';
import { setCurrentTrack } from '../../store/actions/creators/player.ts';
import { TracklistItemsProps } from './TracklistItems.types.ts';

export const TracklistItems = ({
  items, sortType, authorsFilter, genresFilter, nameSearch, favoriteItems,
}: TracklistItemsProps) => {
  const dispatch = useDispatch();
  const handleLikeClick = useLikeClick();
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

      return item.name.includes(nameSearch);
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
        onLikeClick={() => handleLikeClick(isFavorite, item.id)}
        onClick={() => dispatch(setCurrentTrack(item.id, filteredItems))}
      />
    );
  });
};
