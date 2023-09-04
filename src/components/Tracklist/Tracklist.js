import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { Track } from "../Track/Track";
import { TrackSkeleton } from "../TrackSkeleton";
import * as S from "./Tracklist.style";

export function Tracklist({ isLoading, items }) {
  const authors = items.map(item => item.singer);
  const listItem = items.map((item, index) =>
    isLoading 
    ? <TrackSkeleton key={index} /> 
    : <Track
        comment={item.comment}
        link={item.link}
        name={item.name}
        singer={item.singer}
        album={item.album}
        time={item.time}
        key={item.id}
      />
  )

  return (
    <S.MainCenterblock>
    <Search />
    <S.CenterblockH2>Треки</S.CenterblockH2>
    <Filter authors={[...new Set(authors)]}/>
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.Col01>Трек</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.Col04>
      </S.ContentTitle>
      <S.ContentPlaylist>{listItem}</S.ContentPlaylist>
    </S.CenterblockContent>
  </S.MainCenterblock>
  )
}