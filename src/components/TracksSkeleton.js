import * as S from "./Track/Track.style";

export function TracksSkeleton() {
  const skeletons = [];

  for (let i = 0; i < 10; i++) {
    skeletons.push(
      <S.PlaylistItem key={i}>
        <S.PlaylistTrack>
          <img src="img/track_skeleton.png" alt="" />
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  }

  return skeletons;
}
