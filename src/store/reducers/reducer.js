import { NEXT_TRACK, PREV_TRACK, SET_CURRENT_TRACK, START_PLAY, STOP_PLAY, TOGGLE_SHUFLED } from '../actions/types/player';

const initialState = {
  playing: false,
  playlist: [],
  currentTrackId: null,
  shuffled: false,
  shuffledPlaylist: [],
}

const createShuffledPlaylist = (tracklist, currentTrack) => {
  const playlist = [...tracklist].sort(
    () => 0.5 - Math.random(),
  );

  const currentTrackIndex = tracklist.findIndex((track) => {
    return track.id === currentTrack
  });

  return playlist.toSpliced(currentTrackIndex, 1);
}

export function audioplayerReducer (state = initialState, action) {
  switch (action.type) {

    case SET_CURRENT_TRACK: {
      return {
        ...state,
        playing: true,
        currentTrackId: action.payload.id,
        playlist: action.payload.tracklist,
      }
    }

    case NEXT_TRACK: {
      const playlist = state.shuffled ? state.shuffledPlaylist : state.playlist;
      
      const currentTrackIndex = playlist.findIndex((track) => {
        return track.id === state.currentTrackId
      })

      const newTrack = playlist[currentTrackIndex + 1];

      if (!newTrack) {
        return state
      }

      return {
        ...state,
      currentTrackId: newTrack.id,
      }
    }

    case PREV_TRACK: {
      const playlist = state.shuffled ? state.shuffledPlaylist : state.playlist;
      
      const currentTrackIndex = playlist.findIndex((track) => {
        return track.id === state.currentTrackId
      })

      if (currentTrackIndex === 0) {
        return state
      }

      const newTrack = playlist[currentTrackIndex - 1];

      if (!newTrack) {
        return state
      }

      return {
        ...state,
      currentTrackId: newTrack.id
      }
    }

    case START_PLAY: {
      return {
        ...state,
        playing: true,
      }
    }

    case STOP_PLAY: {
      return {
        ...state,
        playing: false,
      }
    }

    case TOGGLE_SHUFLED: {
      return {
        ...state,
        shuffled: !state.shuffled,
        shuffledPlaylist: createShuffledPlaylist(state.playlist, state.currentTrackId),
      }
    }

    default:
      return state;
  }
}

/*export function audioplayerReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      return {
        ...state,
        playlist: action.payload.playlist,
        track: action.payload.track,
        shuffledPlaylist: [...action.payload.playlist].sort(
          () => 0.5 - Math.random(),
        ),
      }
    }

    case NEXT_TRACK: {
      const playlist = state.shuffled ? state.shuffledPlaylist : state.playlist;
      
      const currentTrackIndex = playlist.findIndex((track) => {
        return track.id === state.track.id
      })

      const newTrack = playlist[currentTrackIndex + 1]

      if (!newTrack) {
        return state
      }
      return {
        ...state,
      currentTrackId: newTrack
    }

    case PREV_TRACK: {}

    case START_PLAY: {}

    case STOP_PLAY: {}

    case TOGGLE_SHUFLED: {}

    default:
      return state;
  }
}*/

