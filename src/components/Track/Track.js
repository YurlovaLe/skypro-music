import * as S from "./Track.style";

export function Track({ comment, link, name, singer, album, time }) {
  
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref={link}></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div className="track__title-text">
            <S.TrackTitleLink href="http://">
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
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{time}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}