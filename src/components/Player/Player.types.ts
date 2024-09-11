import { TracksType } from '../../App.types.ts';

export type PlayerProps = {
  isLoading: boolean,
  alltracks: TracksType,
  currentTrack: number,
  favoriteTracks: TracksType | [],
};
