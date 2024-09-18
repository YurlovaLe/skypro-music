import React from 'react';

import { RangeBarProps } from './RangeBar.types';

import * as S from './RangeBar.styles';

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
