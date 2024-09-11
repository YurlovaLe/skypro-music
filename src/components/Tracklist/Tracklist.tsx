import React, { useState } from 'react';

import { Search } from '../Search/Search.tsx';
import { Filter } from '../Filter/Filter.tsx';

import { TracklistItems } from '../TracklistItems/TracklistItems.tsx';
import { TracksSkeleton } from '../TracksSkeleton.tsx';

import * as S from './Tracklist.styles.tsx';

import { TracklistProps } from './Tracklist.types.ts';

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
              authors={[...new Set(authors)]}
              genres={[...new Set(genres)]}
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
        <thead>
          <S.TableTitleRow>
            <S.TableTitle $width="36%">Трек</S.TableTitle>
            <S.TableTitle $width="27%">ИСПОЛНИТЕЛЬ</S.TableTitle>
            <S.TableTitle $width="27%">АЛЬБОМ</S.TableTitle>
            <S.TableTitle $width="10%">
              <S.PlaylistTitleSvg>
                <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
              </S.PlaylistTitleSvg>
            </S.TableTitle>
          </S.TableTitleRow>
        </thead>
        <S.TableBody>
          <tbody>
            {
              isLoading
                ? <TracksSkeleton />
                : (
                  <TracklistItems
                    items={items}
                    sortType={sortType}
                    authorsFilter={authorsFilter}
                    genresFilter={genresFilter}
                    nameSearch={nameSearch}
                    favoriteItems={favoriteItems}
                  />
                )
            }
          </tbody>
        </S.TableBody>
      </S.Table>
    </>
  );
}
