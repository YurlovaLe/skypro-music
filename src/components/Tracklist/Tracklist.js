import { useState } from "react";
import { useDispatch } from "react-redux";

import { setCurrentTrack } from "../../store/actions/creators/player";
import { useLikeClick } from "../../hooks/useLikeClick";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { Track } from "../Track/Track";

import { TracksSkeleton } from "../TracksSkeleton";
import * as S from "./Tracklist.style";

export function Tracklist({ items = [], favoriteItems = [], isLoading, heading, categories = [] }) {
  const [sortType, setSortType] = useState('По умолчанию');
  const [authorsFilter, setAuthorsFilter] = useState([]);
  const [genresFilter, setGenresFilter] = useState(categories);
  const [nameSearch, setNameSearch] = useState('');

  const sortedItems = [...items];
  sortedItems.sort((a, b) => {
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

  const filteredItems = sortedItems
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
    })

  const dispatch = useDispatch();
  const handleLikeClick = useLikeClick();

  const genres = items.map(item => item.genre);
  const authors = items.map(item => item.author);
  const listItems = filteredItems.map((item) => {
    const isFavorite = favoriteItems.find(({ id }) => id === item.id);
    return (
      <Track
        comment={item.comment}
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
    )
  });

  return (
    <>
      <Search setNameSearch={setNameSearch} nameSearch={nameSearch}/>
      <S.CenterblockH2>{heading}</S.CenterblockH2>
      {
        categories.length 
          ? null
          : <Filter 
              authors={[...new Set(authors)]}
              genres={[...new Set(genres)]}
              sortType={sortType}
              setSortType={setSortType}
              authorsFilter={authorsFilter}
              setAuthorsFilter={setAuthorsFilter}
              genresFilter={genresFilter}
              setGenresFilter={setGenresFilter}
            />
      }
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {isLoading ? <TracksSkeleton /> : listItems}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </>
  )
}