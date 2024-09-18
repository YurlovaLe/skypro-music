import { TracksType } from '../../App.types';

export type PlayerProps = {
  isLoading: boolean,
  alltracks: TracksType,
  currentTrack: number,
  favoriteTracks: TracksType | [],
};
