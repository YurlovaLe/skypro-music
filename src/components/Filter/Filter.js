import { useState } from "react";
import { FilterButton } from "../FilterButton/FilterButton";
import * as S from "./Filter.style";

const sortOptions = ['По умолчанию', 'Сначала старые', 'Сначала новые'];

export function Filter({
  authors,
  genres,
  sortType,
  setSortType,
  authorsFilter,
  setAuthorsFilter,
  genresFilter,
  setGenresFilter
}) {
  const [shownFilter, setShownFilter] = useState("");
  const toggleVisibility = (filterName) => {
    setShownFilter(filterName === shownFilter ?  '' : filterName);
  };
  const changeFilter = (option, filter) => {
    const index = filter.indexOf(option);

    let changedFilter = [...filter];
    index === -1 ? changedFilter.push(option) : changedFilter.splice(index, 1);

    return changedFilter;
  }

  return (
    <S.BlockFilter>
    <S.CenterblockFliter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterButton
        text="исполнителю"
        activeOptions={authorsFilter}
        options={authors}
        buttonClass="button-author"
        isShown={shownFilter === "author"}
        buttonName="author"
        isShowCounter={true}
        toggleVisibility={toggleVisibility}
        onOptionClick={(option) => setAuthorsFilter(changeFilter(option, authorsFilter))}
      />
      <FilterButton
        text="жанру"
        activeOptions={genresFilter}
        options={genres}
        buttonClass="button-genre"
        isShown={shownFilter === "genre"}
        buttonName="genre"
        isShowCounter={true}
        toggleVisibility={toggleVisibility}
        onOptionClick={(option) => setGenresFilter(changeFilter(option, genresFilter))}
      />
    </S.CenterblockFliter>
    <S.CenterblockFliter>
      <S.FilterTitle>Сортировка:</S.FilterTitle>
      <FilterButton
        text={sortType}
        activeOptions={[sortType]}
        options={sortOptions}
        buttonClass="button-sort"
        isShown={shownFilter === "sort"}
        buttonName="sort"
        toggleVisibility={toggleVisibility}
        onOptionClick={(option) => setSortType(option)}
      />
    </S.CenterblockFliter>
    </S.BlockFilter>
  );
}
