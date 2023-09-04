import * as S from "./FilterButton.style";

export function FilterButton({
  text,
  buttonClass,
  isShown,
  toggleVisibility,
  buttonName,
  options,
}) {
  const handleClick = () => toggleVisibility(buttonName);

  return (
    <div>
      <S.FilterBtn
        className={`_btn-text ${buttonClass}`}
        onClick={handleClick}
      >
        {text}
      </S.FilterBtn>

      {isShown && (
        <S.Menu>
          {options.map((option, index) => (
            <S.MenuOptions
              key={index}
              onClick={() => {
                console.log(options[index]);
              }}
            >
              {" "}
              {option}
            </S.MenuOptions>
          ))}
        </S.Menu>
      )}
    </div>
  );
}
