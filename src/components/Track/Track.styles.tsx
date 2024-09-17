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

export const Track = styled.div`
  display: flex;
  cursor: pointer;
  @media (max-width: 760px) {
    gap: 12px;
  };
`;

export const TrackTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
  width: 36%;

  @media (max-width: 760px) {
    width: 50%;
    gap: 10px;
  };
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

export const TrackAuthor = styled.div`
  width: 27%;
  align-self: center;
  line-height: 24px;

  @media (max-width: 760px) {
    color: #696969;
    width: 40%
  };
`;

export const TrackAlbum = styled.div`
  width: 27%;
  align-self: center;
  line-height: 24px;
  color: #696969;

  @media (max-width: 760px) {
    display: none;
  };
`;

export const TrackTime = styled.div`
  width: 10%;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 760px) {
    width: 10%;
  };
`;

export const TrackTimeSvg = styled.svg<{$isFavorite: boolean}>`
  width: 14px;
  height: 12px;
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

  @media (max-width: 760px) {
    display: none;
  };
`;
