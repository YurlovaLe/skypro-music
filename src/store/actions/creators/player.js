import { NEXT_TRACK, PREV_TRACK, SET_CURRENT_TRACK, START_PLAY, STOP_PLAY, TOGGLE_SHUFLED } from '../types/player';

export const startPlay = () => ({
  type: START_PLAY,
  payload: {
  },
});

export const stopPlay = () => ({
  type: STOP_PLAY,
  payload: {
  },
});

export const nextTrack = (tracklist) => ({
  type: NEXT_TRACK,
  payload: {
    tracklist
  },
});

export const prevTrack = (tracklist) => ({
  type: PREV_TRACK,
  payload: {
    tracklist
  },
});

export const setCurrentTrack = (id, tracklist) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    tracklist,
    id,
  },
});

export const toggleShufled = (id, tracklist) => ({
  type: TOGGLE_SHUFLED,
  payload: {
    payload: {
    },
  },
})
