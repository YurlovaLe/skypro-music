import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TracksType } from '../App.types';
import { RootState } from './store.ts';

type InitialState = {
  isPlaying: boolean,
  playlist: TracksType,
  currentTrackId: number,
  isShuffled: boolean,
  shuffledPlaylist: TracksType,
};

const initialState: InitialState = {
  isPlaying: false,
  playlist: [],
  currentTrackId: 0,
  isShuffled: false,
  shuffledPlaylist: [],
};

const createShuffledPlaylist = (tracklist) => {
  const playlist = [...tracklist].sort(
    () => 0.5 - Math.random(),
  );

  return playlist;
};

export const audioplayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    startPlay: (state) => {
      state.isPlaying = true;
    },
    stopPlay: (state) => {
      state.isPlaying = false;
    },
    nextTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;

      const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrackId);

      const newTrackId = (currentTrackIndex === (playlist.length - 1))
        ? playlist[currentTrackIndex].id
        : playlist[currentTrackIndex + 1].id;

      state.currentTrackId = newTrackId;
    },
    prevTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;

      const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrackId);
      const newTrack = (currentTrackIndex === 0)
        ? playlist[currentTrackIndex].id
        : playlist[currentTrackIndex - 1].id;
      state.currentTrackId = newTrack;
    },
    setCurrentTrack: (state, action: PayloadAction<{id: number, tracklist: TracksType}>) => {
      state.isPlaying = true;
      state.currentTrackId = action.payload.id;
      state.playlist = action.payload.tracklist;
    },
    toggleShufled: (state) => {
      state.isShuffled = !state.isShuffled;
      state.shuffledPlaylist = createShuffledPlaylist(state.playlist);
    },
  },
});

export const selectPlayer = (state: RootState): InitialState => state.audioplayer;

export const {
  startPlay,
  stopPlay,
  nextTrack,
  prevTrack,
  setCurrentTrack,
  toggleShufled,
} = audioplayerSlice.actions;

export default audioplayerSlice.reducer;
