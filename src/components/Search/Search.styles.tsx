import { styled } from 'styled-components';

export const CenterBlockSearch = styled.div`
  border-bottom: 1px solid #4e4e4e;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  stroke: #ffffff;
  fill: transparent;
`;

export const SearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 14px;
  font-size: 16px;
  color: #ffffff;
  outline: none;

  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
  };
`;
