import { css, styled } from 'styled-components';

export const Table = styled.table`
  border-spacing: 12px;
  display: block;
`;

export const CenterblockH2 = styled.h2`
  font-weight: 400;
  font-size: 60px;
  line-height: 64px;
  letter-spacing: -0.8px;
`;

export const CenterblockContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const TableTitleRow = styled.tr`
`;

export const TableTitle = styled.th<{$width: string}>`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  text-align: left;
  &:last-child {
    text-align: right;
  };
`;

export const TableBody = styled.div`
  height: 560px;
  overflow-x: auto;
`;

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: scroll;
`;

const PlaylistTitleMixin = css`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const Col01 = styled.div`
  ${PlaylistTitleMixin}
  width: 447px;
`;

export const Col02 = styled.div`
  ${PlaylistTitleMixin}
  width: 321px;
`;

export const Col03 = styled.div`
  ${PlaylistTitleMixin}
  width: 245px;
`;

export const Col04 = styled.div`
  ${PlaylistTitleMixin}
  width: 60px;
  text-align: end;
`;
