import React from 'react';

import { useSelector } from 'react-redux';
import {
  currentTrackSelector,
  isPlayingSelector,
} from '../../store/selectors/player.ts';

import { timeInMin } from '../../App.helpers.ts';

import * as S from './Track.styles.tsx';
import { TrackProps } from './Track.types.ts';

export function Track({
  name,
  singer,
  album,
  duration,
  onClick,
  onLikeClick,
  trackId,
  isFavorite,
}: TrackProps) {
  const currentTrackId = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);

  return (
    <S.Track>
      <S.TrackTitleBox>
        <S.TrackTitleImage>
          {currentTrackId === trackId ? (
            <S.TrackTitleCircle $isPlaying={isPlaying} />
          ) : (
            <S.TrackTitleSvg>
              <use xlinkHref="/img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          )}
        </S.TrackTitleImage>
        <S.TrackTitle onClick={onClick}>
          {name}
        </S.TrackTitle>
      </S.TrackTitleBox>
      <S.TrackAuthor>
        <S.TrackAuthorLink href="http://">{singer}</S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackTimeSvg
          $isFavorite={isFavorite}
          onClick={onLikeClick}
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-like" />
        </S.TrackTimeSvg>
        <S.TrackTimeText>{timeInMin(duration)}</S.TrackTimeText>
      </S.TrackTime>
    </S.Track>
  );
}
