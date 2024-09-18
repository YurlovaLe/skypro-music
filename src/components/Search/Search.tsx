import React from 'react';

import { SearchProps } from './Search.types';

import * as S from './Search.styles';

export function Search({ setNameSearch, nameSearch }: SearchProps) {
  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        value={nameSearch}
        onChange={(event) => setNameSearch(event.target.value.toLocaleLowerCase())}
        autoComplete="off"
      />
    </S.CenterBlockSearch>
  );
}
