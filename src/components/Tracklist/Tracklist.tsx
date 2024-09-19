import React, { useState } from 'react';

import { Search } from '../Search';
import { Filter } from '../Filter';
import { ListItems } from '../ListItems';

import { TracklistProps } from './Tracklist.types';

import * as S from './Tracklist.styles';

export function Tracklist({
  items, favoriteItems, isLoading, heading, categories,
}: TracklistProps) {
  const [sortType, setSortType] = useState('По умолчанию');
  const [authorsFilter, setAuthorsFilter] = useState<string[]>([]);
  const [genresFilter, setGenresFilter] = useState<string[]>(categories);
  const [nameSearch, setNameSearch] = useState('');

  const genres = items.map((item) => item.genre);
  const authors = items.map((item) => item.author);

  return (
    <>
      <Search setNameSearch={setNameSearch} nameSearch={nameSearch} />
      <S.CenterblockH2>{heading}</S.CenterblockH2>
      {
        categories.length
          ? null
          : (
            <Filter
              authors={[...new Set(authors)] as string[]}
              genres={[...new Set(genres)] as string[]}
              sortType={sortType}
              setSortType={setSortType}
              authorsFilter={authorsFilter}
              setAuthorsFilter={setAuthorsFilter}
              genresFilter={genresFilter}
              setGenresFilter={setGenresFilter}
            />
          )
      }
      <S.Table>
        <S.TableTitleRow>
          <S.TableTitle $width="36%">Трек</S.TableTitle>
          <S.TableTitle $width="27%">ИСПОЛНИТЕЛЬ</S.TableTitle>
          <S.TableTitle $width="27%">АЛЬБОМ</S.TableTitle>
          <S.TableTitle $width="10%">
            <S.PlaylistTitleSvg>
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.TableTitle>
        </S.TableTitleRow>

        <S.TableBody>
          {
            !isLoading
              && (
                <ListItems
                  items={items}
                  sortType={sortType}
                  authorsFilter={authorsFilter}
                  genresFilter={genresFilter}
                  nameSearch={nameSearch}
                  favoriteItems={favoriteItems}
                />
              )
            }
        </S.TableBody>
      </S.Table>
    </>
  );
}
