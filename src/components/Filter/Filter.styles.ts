import { styled } from 'styled-components';

export const BlockFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CenterblockFliter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  &:last-child {
    @media (max-width: 1260px) {
      display: none;
      font-size: 14px;
    };
  };
  }
`;

export const FilterTitle = styled.div`
  line-height: 18px;
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
`;
