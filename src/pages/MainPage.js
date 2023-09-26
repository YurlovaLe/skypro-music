import React, { useState, useEffect, useContext } from "react";
import { MenuList } from "../components/MenuList/MenuList";
import { Player } from "../components/Player/Player";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Tracklist } from "../components/Tracklist/Tracklist";
import { UserContext } from "../App";
import { getAllTracks } from "../api";
import * as S from "../App.style";

function MainPage() {
  const { user, logout } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);

  const [alltracks, setAlltracks] = useState([]);

  const [currentTrack, setCurrentTrack] = useState(null);

  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    getAllTracks()
      .then((playlist) => {
        console.log(playlist);
         setAlltracks(playlist);
         setIsLoading(false);
      })
      .catch((error) => {
        setLoadingError(error.message);
        setIsLoading(false);
      })
  }, []);

  return (
    loadingError ? loadingError : 
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MenuList />
            <Tracklist isLoading={isLoading} items={alltracks} setCurrentTrack={setCurrentTrack}/>
            <S.MainSidebar>
              <S.SidebarPersonal>
                <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
                <S.SidebarIcon onClick={logout}>
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
            {currentTrack ? <Player isLoading={isLoading} alltracks={alltracks} currentTrack={currentTrack}/> : null}
          </S.Bar>
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default MainPage;