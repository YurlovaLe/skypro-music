import * as S from "./RangeBar.styles";

export default function RangeBar({ currentValue, maxValue, onRangeChange, color }) {

  return (
    <S.StyledProgressInput
      type="range"
      min={0}
      max={maxValue}
      value={currentValue}
      step={0.01}
      onChange={(event) => onRangeChange(event.target.value)}
      $color={color}
    />
  );
}