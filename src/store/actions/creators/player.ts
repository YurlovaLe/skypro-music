import {
  NEXT_TRACK, PREV_TRACK, SET_CURRENT_TRACK, START_PLAY, STOP_PLAY, TOGGLE_SHUFLED,
} from '../types/player.ts';

export const startPlay = () => ({
  type: START_PLAY,
  payload: {},
});

export const stopPlay = () => ({
  type: STOP_PLAY,
  payload: {},
});

export const nextTrack = () => ({
  type: NEXT_TRACK,
  payload: {},
});

export const prevTrack = () => ({
  type: PREV_TRACK,
  payload: {},
});

export const setCurrentTrack = (id, tracklist) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    tracklist,
    id,
  },
});

export const toggleShufled = () => ({
  type: TOGGLE_SHUFLED,
  payload: {},
});
