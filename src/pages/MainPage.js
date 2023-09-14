import React, { useState, useEffect } from "react";
import { MenuList } from "../components/MenuList/MenuList";
import { Player } from "../components/Player/Player";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Tracklist } from "../components/Tracklist/Tracklist";
import { getAllTracks } from "../api";
// import { tracks } from "../mocks/tracks";
import * as S from "../App.style";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const [alltracks, setAlltracks] = useState();

  useEffect(() => {
    getAllTracks().then((playlist) => {
      console.log(playlist)
      setAlltracks(playlist)
    });
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MenuList />
            <Tracklist isLoading={isLoading} items={alltracks} />
            <S.MainSidebar>
              <S.SidebarPersonal>
                <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                <S.SidebarIcon>
                  <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout"></use>
                  </svg>
                </S.SidebarIcon>
              </S.SidebarPersonal>
              <S.SidebarBlock>
                <Sidebar isLoading={isLoading} />
              </S.SidebarBlock>
            </S.MainSidebar>
          </S.Main>
          <S.Bar>
            <Player isLoading={isLoading} />
          </S.Bar>
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default MainPage;