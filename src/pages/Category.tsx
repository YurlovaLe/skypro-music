import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { Tracklist } from '../components/Tracklist';

import { OutletContextType } from '../App.types';

export function Category() {
  const categories = ['Классическая музыка', 'Электронная музыка', 'Рок музыка'];
  const params = useParams() as {category: string};
  const { isLoading, alltracks, favoriteTracks } = useOutletContext() as OutletContextType;
  return (
    <Tracklist
      heading={categories[Number(params.category) - 1]}
      categories={[categories[Number(params.category) - 1]]}
      items={alltracks}
      favoriteItems={favoriteTracks}
      isLoading={isLoading}
    />
  );
}
