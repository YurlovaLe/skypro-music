import React, { useState } from 'react';
import { FilterButton } from '../FilterButton';

import { FilterProps } from './Filter.types';

import * as S from './Filter.styles';

const sortOptions = ['По умолчанию', 'Сначала старые', 'Сначала новые'];

export function Filter({
  authors,
  genres,
  sortType,
  setSortType,
  authorsFilter,
  setAuthorsFilter,
  genresFilter,
  setGenresFilter,
}: FilterProps) {
  const [shownFilter, setShownFilter] = useState('');

  const toggleVisibility = (filterName: string) => {
    setShownFilter(filterName === shownFilter ? '' : filterName);
  };
  const changeFilter = (option: string, filter: string[]): string[] => {
    const index = filter.indexOf(option);

    const changedFilter = [...filter];
    index === -1 ? changedFilter.push(option) : changedFilter.splice(index, 1);

    return changedFilter;
  };

  return (
    <S.BlockFilter>
      <S.CenterblockFliter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButtons>
          <FilterButton
            text="исполнителю"
            activeOptions={authorsFilter}
            options={authors}
            isShown={shownFilter === 'author'}
            buttonName="author"
            isShowCounter
            toggleVisibility={toggleVisibility}
            onOptionClick={(option) => setAuthorsFilter(changeFilter(option, authorsFilter))}
          />
          <FilterButton
            text="жанру"
            activeOptions={genresFilter}
            options={genres}
            isShown={shownFilter === 'genre'}
            buttonName="genre"
            isShowCounter
            toggleVisibility={toggleVisibility}
            onOptionClick={(option) => setGenresFilter(changeFilter(option, genresFilter))}
          />
        </S.FilterButtons>
      </S.CenterblockFliter>
      <S.CenterblockFliter>
        <S.FilterTitle>Сортировка:</S.FilterTitle>
        <FilterButton
          text={sortType}
          activeOptions={[sortType]}
          options={sortOptions}
          isShown={shownFilter === 'sort'}
          buttonName="sort"
          toggleVisibility={toggleVisibility}
          onOptionClick={(option) => setSortType(option)}
          isShowCounter={false}
        />
      </S.CenterblockFliter>
    </S.BlockFilter>
  );
}
