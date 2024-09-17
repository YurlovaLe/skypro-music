import styled from 'styled-components';

export const BarVolumeBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  
  @media (max-width: 760px) {
    gap: 6px;
  };
`;

export const BarVolumeImage = styled.div`
  width: 13px;
  height: 18px;
`;

export const BarVolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  cursor: pointer;
`;
