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

export const nextTrack = () => ({
  type: NEXT_TRACK,
  payload: {
  },
});

export const prevTrack = () => ({
  type: PREV_TRACK,
  payload: {
  },
});

export const setCurrentTrack = (id) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    id
  },
});

export const toggleShufled = () => ({
  type: TOGGLE_SHUFLED,
  payload: {
    // playing,
    // playlist,
    // track,
    // shuffled,
    // shuffledPlaylist,
  },
})
