export type FilterButtonProps = {
  text: string,
  isShown: boolean,
  toggleVisibility: (filterName: string) => void,
  buttonName: string,
  options: string[],
  activeOptions: string[],
  onOptionClick: (option: string) => void,
  isShowCounter: boolean,
};
