import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Tracklist } from '../components/Tracklist/Tracklist.tsx';

import type { OutletContextType } from '../App.types';

export function Tracks() {
  const {
    isLoading, alltracks, favoriteTracks,
  } = useOutletContext() as OutletContextType;
  return (
    <Tracklist
      categories={[]}
      heading="Треки"
      items={alltracks}
      favoriteItems={favoriteTracks}
      isLoading={isLoading}
    />
  );
}
