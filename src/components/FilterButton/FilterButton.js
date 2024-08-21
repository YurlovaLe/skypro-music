import * as S from "./FilterButton.styles";

export function FilterButton({
  text,
  buttonClass,
  isShown,
  toggleVisibility,
  buttonName,
  options,
  activeOptions,
  onOptionClick,
  isShowCounter,
}) {
  const handleClick = () => toggleVisibility(buttonName);

  return (
    <S.FilterContainer>
      <S.FilterBtn
        className={`_btn-text ${buttonClass}`}
        onClick={handleClick}
        $isShown={isShown}
      >
        {text}
      </S.FilterBtn>

      {isShown && (
        <S.Menu>
          {options.map((option, index) => (
            <S.MenuOptions
              key={index}
              onClick={() => {
                onOptionClick(option);
              }}
              $isActive={activeOptions.includes(option)}
            >
              {" "}
              {option}
            </S.MenuOptions>
          ))}
        </S.Menu>
      )}
      {
        (activeOptions.length && isShowCounter)
        ? <S.MenuCount>
            {activeOptions.length}
          </S.MenuCount>
        : null
      }
    </S.FilterContainer>
  );
}
