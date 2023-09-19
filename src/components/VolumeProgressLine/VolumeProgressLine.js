import * as S from "./VolumeProgressLine.style";

export default function VolumeProgressLine({ currVolume, manualSetVolume}) {

  return (
    <S.VolumeProgressLine
      type="range"
      min={0}
      max={1}
      value={currVolume}
      step={0.01}
      onChange={(event) => manualSetVolume(event.target.value)}
      $color="#B672FF"
    />
  );
}