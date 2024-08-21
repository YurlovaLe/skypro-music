import * as S from "./Search.styles";

export function Search({ setNameSearch, nameSearch }) {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        value={nameSearch}  
        onChange={(event) => setNameSearch(event.target.value)}
      />
    </S.CenterblockSearch>
  )
}