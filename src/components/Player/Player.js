import * as S from "./Player.style";

export function Player({ isLoading }) {
  return (
    <S.BarContent>
      <S.BarPlayerProgress />
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <S.PlayerControls>
            <S.PlayerBtnPrev>
              <S.PlayerBtnPrevSvg alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay className="_btn">
              <S.PlayerBtnPlaySvg alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext>
              <S.PlayerBtnNextSvg alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
              </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat className="_btn-icon">
              <S.PlayerBtnRepeatSvg alt="repeat">
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
              </S.PlayerBtnRepeatSvg>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle className="_btn-icon">
              <S.PlayerBtnShuffleSvg alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
              </S.PlayerBtnShuffleSvg>
            </S.PlayerBtnShuffle>
          </S.PlayerControls>

          <S.PlayerTrackPlay>
            {isLoading 
              ? <img src="img/player_skeleton.png" alt=""/>
              : (<S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>
            )}

            <S.TrackPlayLikeDis>
              <S.TrackPlayLike className="_btn-icon">
                <S.TrackPlayLikeSvg alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackPlayLikeSvg>
              </S.TrackPlayLike>
              <S.TrackPlayDislike className="_btn-icon">
                <S.TrackPlayDislikeSvg alt="dislike">
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </S.TrackPlayDislikeSvg>
              </S.TrackPlayDislike>
            </S.TrackPlayLikeDis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock>
          <S.BarVolumeContent>
            <S.BarVolumeImage>
              <S.BarVolumeSvg alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </S.BarVolumeSvg>
            </S.BarVolumeImage>
            <S.BarVolumeProgress className="_btn">
              <S.BarVolumeProgressLine
                className="_btn"
                type="range"
                name="range"
              />
            </S.BarVolumeProgress>
          </S.BarVolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  )
}
