import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Tracklist } from '../components/Tracklist';

import { OutletContextType } from '../App.types';

export function Favorites() {
  const { favoriteTracks, isLoading } = useOutletContext() as OutletContextType;
  return (
    <Tracklist
      categories={[]}
      heading="Мои треки"
      items={favoriteTracks}
      favoriteItems={favoriteTracks}
      isLoading={isLoading}
    />
  );
}
