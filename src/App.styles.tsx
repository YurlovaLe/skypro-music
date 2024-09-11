import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
  padding: 36px 72px
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
`;

export const MainCenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 51px;
`;

export const MainSideBar = styled.div`
  max-width: 250px;
`;

export const SideBarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

export const SideBarIcon = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`;

export const SideBarBlock = styled.div`
  padding-top: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
