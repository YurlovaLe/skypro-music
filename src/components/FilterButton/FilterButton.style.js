import { styled } from "styled-components";

export const Menu = styled.ul` 
  position: absolute;
  margin-top: 10px;
  padding: 34px;
  width: 248px;
  max-height: 305px;
  border-radius: 12px;
  background-color: #313131;
  overflow: scroll;
`

export const MenuOptions = styled.li`
  size: 20px;
  line-height: 24px;

  &:hover {
    text-decoration: underline;
    color: #ad61ff;
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`
export const FilterBtn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  margin-right: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`
