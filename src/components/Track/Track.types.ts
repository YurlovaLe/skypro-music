export type TrackProps = {
  name: string,
  singer: string,
  album: string,
  duration: number,
  onClick: () => void,
  trackId: number,
  isFavorite: boolean,
};
