import React from 'react';
import * as S from './Search.styles.tsx';
import { SearchProps } from './Search.types.ts';

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
        onChange={(event) => setNameSearch(event.target.value)}
        autoComplete="off"
      />
    </S.CenterBlockSearch>
  );
}
