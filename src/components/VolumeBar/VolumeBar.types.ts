export type VolumeBarProps = {
  setVolumeMuted: () => void,
  isMuted: boolean,
  currVolume: number,
  manualSetVolume: (value: number) => void,
};
