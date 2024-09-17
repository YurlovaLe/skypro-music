import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  @media (max-width: 760px) {
  }
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
  padding: 36px 72px;
  
  @media (max-width: 760px) {
    padding: 24px 16px;
  };
`;

export const Main = styled.main`
  display: flex;
  gap: 60px;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;

  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: normal;
  };
  
  @media (max-width: 1260px) {
    gap: 30px;
  };
`;

export const MainCenterBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const MainSideBar = styled.div`
  min-width: 250px;

  @media (max-width: 960px) {
    display: none;
  };
`;

export const SideBarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  @media (max-width: 1260px) {
    justify-content: normal;
  };
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

  @media (max-width: 1260px) {
    display: none;
  };
`;

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
