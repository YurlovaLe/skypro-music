import { styled } from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
`;

export const FilterBtn = styled.div<{$isShown: boolean}>`
  line-height: 18px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  color: ${(props) => (props.$isShown ? '#ad61ff' : '')};
  border-color: ${(props) => (props.$isShown ? '#ad61ff' : '')};

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  };

    @media (max-width: 760px) {
      padding: 6px 10px;
    };
`;

export const Menu = styled.ul` 
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 10px;
  padding: 34px;
  width: 248px;
  max-height: 305px;
  border-radius: 12px;
  background-color: #313131;
  overflow: scroll;
`;

export const MenuOptions = styled.li<{$isActive: boolean}>`
  size: 20px;
  line-height: 18px;
  color: ${(props) => (props.$isActive ? '#ad61ff' : '')};
  &:hover {
    text-decoration: underline;
    color: #d9b6ff;
    cursor: pointer;
  };
`;

export const MenuCount = styled.div`
  background-color: #ad61ff;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
`;
