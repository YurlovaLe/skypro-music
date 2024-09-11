export type FilterProps = {
  authors: string[],
  genres: string[],
  sortType: string,
  setSortType: (option: string) => void,
  authorsFilter: string[],
  setAuthorsFilter: (authors: string[]) => void,
  genresFilter: string[],
  setGenresFilter: (genres: string[]) => void
};
