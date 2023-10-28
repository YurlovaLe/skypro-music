import { useContext } from "react";
import { useDispatch } from "react-redux";

import { setCurrentTrack } from "../../store/actions/creators/player";
import { useAddTrackToFavoriteMutation, useDeleteTrackFromFavoriteMutation } from "../../services/catalog";
import { UserContext } from "../../App";

import { Filter } from "../Filter/Filter";
import { Track } from "../Track/Track";
import { TracksSkeleton } from "../TracksSkeleton";
import * as S from "./Tracklist.style";

export function Tracklist({ items = [], favoriteItems = [], isLoading, heading }) {
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);

  const [addFavorite] = useAddTrackToFavoriteMutation();
  const [deleteFavorite] = useDeleteTrackFromFavoriteMutation();
  const handleLikeClick = (isFavorite, trackId) => {
    const callLike = isFavorite ? deleteFavorite : addFavorite;
    callLike({trackId, token: user.access});
  }

  const authors = items.map(item => item.singer);
  const listItems = items.map((item) => {
    const isFavorite = favoriteItems.find(({ id }) => id === item.id);
    return (
      <Track
        comment={item.comment}
        name={item.name}
        singer={item.singer}
        album={item.album}
        time={item.time}
        trackId={item.id}
        isFavorite={isFavorite}
        key={item.id}
        onLikeClick={() => handleLikeClick(isFavorite, item.id)}
        onClick={() => dispatch(setCurrentTrack(item.id, items))}
      />
    )
  });

  return (
    <>
      <S.CenterblockH2>{heading}</S.CenterblockH2>
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
    </>
  )
}