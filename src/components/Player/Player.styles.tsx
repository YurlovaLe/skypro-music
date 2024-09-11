import { styled } from 'styled-components';

export const BarTime = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 36px;
`;

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(28, 28, 28);
  padding: 0 36px;
`;

export const BarPlayer = styled.div`
  display: flex;
  gap: 38px;
`;

export const PlayerControls = styled.div`
  display: flex;
  gap: 32px;
`;

export const PlayerBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;

export const PlayerBtnSvg = styled.svg<{$isUse: boolean}>`
  width: 18px;
  height: 12px;
  stroke: ${(props) => (props.$isUse ? '#d9d9d9' : '#696969')};
`;

export const PlayerTrackPlay = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  column-gap: 12px;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: span 2;
`;

export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const TrackPlayAuthor = styled.div`
`;

export const TrackPlayAlbum = styled.div`
`;

export const TrackLikeSvg = styled.svg<{$isFavorite: boolean}>`
  width: 14px;
  height: 12px;
  fill: ${({ $isFavorite }) => ($isFavorite ? '#B672FF' : 'transparent')};
  stroke: #696969;
  cursor: pointer;
`;
