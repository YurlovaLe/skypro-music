import { currentTrackSelector, isPlayingSelector } from "../../store/selectors/player";
import { useSelector } from "react-redux";
import * as S from "./Track.style";

export function Track({
  comment,
  name,
  singer,
  album,
  time,
  onClick,
  onLikeClick,
  trackId,
  isFavorite,
}) {
  const currentTrackId = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {(currentTrackId === trackId) ? (<S.TrackTitleCircle $isPlaying={isPlaying}></S.TrackTitleCircle>) 
            : (<S.TrackTitleSvg alt="music" >
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>)}
          </S.TrackTitleImage>
          <div className="track__title-text">
            <S.TrackTitleLink onClick={onClick}>
              {name} <S.TrackTitleSpan>{comment}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">{singer}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">
          {album}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSvg $isFavorite={isFavorite} onClick={onLikeClick} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{time}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}