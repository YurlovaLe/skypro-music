import * as S from "./ProgressBar.style";

export default function ProgressBar({ currTime, duration, manualSetCurrTime}) {

  return (
    <S.StyledProgressInput
      type="range"
      min={0}
      max={duration}
      value={currTime}
      step={0.01}
      onChange={(event) => manualSetCurrTime(event.target.value)}
      $color="#B672FF"
    />
  );
}