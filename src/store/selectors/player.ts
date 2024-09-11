export const currentTrackSelector = (store) => store.audioplayer.currentTrackId;

export const isPlayingSelector = (store) => store.audioplayer.playing;

export const isShuffledSelector = (store) => store.audioplayer.shuffled;
