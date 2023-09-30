import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { Track } from "../Track/Track";
import { setCurrentTrack } from "../../store/actions/creators/player";
import { TracksSkeleton } from "../TracksSkeleton";
import * as S from "./Tracklist.style";
import { useDispatch } from "react-redux";

export function Tracklist({ isLoading, items }) {
  const dispatch = useDispatch();
  const authors = items.map(item => item.singer);
  const listItems = items.map((item) => (
      <Track
        comment={item.comment}
        name={item.name}
        singer={item.singer}
        album={item.album}
        time={item.time}
        trackId={item.id}
        key={item.id}
        onClick={() => {
          dispatch(setCurrentTrack(item.id, items))
        }}
      />
    )
  );

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
      <S.ContentPlaylist>
        {isLoading ? <TracksSkeleton /> : listItems}
      </S.ContentPlaylist>
    </S.CenterblockContent>
  </S.MainCenterblock>
  )
}