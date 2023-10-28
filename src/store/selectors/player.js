export const currentTrackSelector = (store) => {
  return store.audioplayer.currentTrackId;
}

export const isPlayingSelector = (store) => {
  return store.audioplayer.playing;
}

export const isShuffledSelector = (store) => {
  return store.audioplayer.shuffled;
}
