import React from 'react';
import * as S from './RangeBar.styles.tsx';
import { RangeBarProps } from './RangeBar.types.ts';

export function RangeBar({
  currentValue, maxValue, onRangeChange, color,
}: RangeBarProps) {
  return (
    <S.StyledProgressInput
      type="range"
      min={0}
      max={maxValue}
      value={currentValue}
      step={0.01}
      onChange={(event) => onRangeChange(Number(event.target.value))}
      $color={color}
    />
  );
}
