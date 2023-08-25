import { useState } from "react";
import { FilterButton } from "../FilterButton";
import * as S from "./Filter.style";

//const authors=['Nero', 'Dynoro, Outwork, Mr. Gee', 'Ali Bakgor', 'Стоункат, Psychopath', 'Jaded, Will Clarke, AR/CO<', 'Blue Foundation, Zeds Dead'];
const years = [2000, 2021, 1998];
const genres = ["Рок", "Хип-хоп", "Поп-музыка", "Техно", "Инди"];

export function Filter({ authors }) {
  const [shownFilter, setShownFilter] = useState("");
  const toggleVisibility = (filterName) => {
    filterName === shownFilter
      ? setShownFilter("")
      : setShownFilter(filterName);
  };

  return (
    <S.CenterblockFliter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterButton
        text="исполнителю"
        options={authors}
        buttonClass="button-author"
        isShown={shownFilter === "author"}
        buttonName="author"
        toggleVisibility={toggleVisibility}
      />
      <FilterButton
        text="году выпуска"
        options={years}
        buttonClass="button-year"
        isShown={shownFilter === "year"}
        buttonName="year"
        toggleVisibility={toggleVisibility}
      />
      <FilterButton
        text="жанру"
        options={genres}
        buttonClass="button-genre"
        isShown={shownFilter === "genre"}
        buttonName="genre"
        toggleVisibility={toggleVisibility}
      />
    </S.CenterblockFliter>
  );
}
