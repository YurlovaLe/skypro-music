import React from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectPlayer } from '../../store/slices';
import { useLikeClick } from '../../hooks/useLikeClick';
import { timeInMin } from '../../App.helpers';

import { TrackProps } from './Track.types';

import * as S from './Track.styles';

export function Track({
  name,
  singer,
  album,
  duration,
  onClick,
  trackId,
  isFavorite,
}: TrackProps) {
  const { currentTrackId, isPlaying } = useAppSelector(selectPlayer);
  const onLikeClick = useLikeClick();

  return (
    <S.Track onClick={onClick}>
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
        <S.TrackTitle>
          {name}
        </S.TrackTitle>
      </S.TrackTitleBox>
      <S.TrackAuthor>
        {singer}
      </S.TrackAuthor>
      <S.TrackAlbum>
        {album}
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackTimeSvg
          $isFavorite={isFavorite}
          onClick={(event) => {
            event.stopPropagation();
            onLikeClick(isFavorite, trackId);
          }}
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-like" />
        </S.TrackTimeSvg>
        <S.TrackTimeText>{timeInMin(duration)}</S.TrackTimeText>
      </S.TrackTime>
    </S.Track>
  );
}
