import { styled } from 'styled-components';

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const PlaylistTrack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Track = styled.tr`
`;

export const TrackTitleBox = styled.td`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
`;

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const TrackTitleCircle = styled.div<{$isPlaying: boolean}>`
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  animation: ${(props) => (props.$isPlaying ? 'bubble_out 0.6s ease-in-out infinite both' : 'none')};
 
  @keyframes bubble_out {
    0%,
    to {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
  };
`;

export const TrackTitle = styled.div`
  line-height: 18px;
`;

export const TrackAuthor = styled.td`
  width: 27%;
`;

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;

export const TrackAlbum = styled.td`
  width: 27%;
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

export const TrackTime = styled.td`
  width: 10%;
`;

export const TrackTimeSvg = styled.svg<{$isFavorite: boolean}>`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: ${({ $isFavorite }) => ($isFavorite ? '#B672FF' : 'transparent')};
  stroke: #696969;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;
