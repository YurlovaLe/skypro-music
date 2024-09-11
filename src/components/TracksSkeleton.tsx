import React from 'react';
import * as S from './Track/Track.styles.tsx';

export function TracksSkeleton() {
  const skeletons: JSX.Element[] = [];

  for (let i = 0; i < 10; i += 1) {
    skeletons.push(
      <S.PlaylistItem key={i}>
        <S.PlaylistTrack>
          <img src="img/track_skeleton.png" alt="" />
        </S.PlaylistTrack>
      </S.PlaylistItem>,
    );
  }

  return skeletons;
}
