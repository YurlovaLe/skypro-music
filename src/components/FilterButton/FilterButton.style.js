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
    color: #d9b6ff;
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  color: ${(props) => props.$isActive ? '#ad61ff' : ""}
`

export const FilterContainer = styled.div`
  position: relative;
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

  color: ${(props) => props.$isShown ? '#ad61ff' : ""};
  border-color: ${(props) => props.$isShown ? '#ad61ff' : ""};
`
export const MenuCount = styled.div`
  color: white;
  background-color: rgb(173, 97, 255);
  width: 26px;
  height: 26px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-family: StratosSkyeng;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`
