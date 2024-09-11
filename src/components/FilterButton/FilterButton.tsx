import React from 'react';
import * as S from './FilterButton.styles.tsx';
import { FilterButtonProps } from './FilterButton.types.ts';

export function FilterButton({
  text,
  isShown,
  toggleVisibility,
  buttonName,
  options,
  activeOptions,
  onOptionClick,
  isShowCounter,
}: FilterButtonProps) {
  const handleClick = () => toggleVisibility(buttonName);

  return (
    <S.FilterContainer>
      <S.FilterBtn onClick={handleClick} $isShown={isShown}>
        {text}
      </S.FilterBtn>

      {isShown && (
        <S.Menu>
          {options.map((option, index) => (
            <S.MenuOptions
              key={index}
              onClick={() => {
                onOptionClick(option);
                handleClick();
              }}
              $isActive={activeOptions.includes(option)}
            >
              {' '}
              {option}
            </S.MenuOptions>
          ))}
        </S.Menu>
      )}
      {
        (activeOptions.length && isShowCounter)
          ? (
            <S.MenuCount>
              {activeOptions.length}
            </S.MenuCount>
          )
          : null
      }
    </S.FilterContainer>
  );
}
