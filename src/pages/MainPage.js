import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { useGetAllTracksQuery, useGetFavoriteTracksQuery } from "../services/catalog";
import { currentTrackSelector } from "../store/selectors/player";
import { UserContext } from "../App";
import { handleRefreshApi } from "../api";

import { MenuList } from "../components/MenuList/MenuList";
import { Player } from "../components/Player/Player";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Search } from "../components/Search/Search";
import * as S from "../App.style";

function MainPage() {
  const { user, logout, updateUser } = useContext(UserContext);
  const currentTrack = useSelector(currentTrackSelector);
  const [isLoading, setIsLoading] = useState(true);

  const { data: alltracks = [], error: loadingError, isLoading: isAllLoading} = useGetAllTracksQuery();
  const { data: favoriteTracks, error, isLoading: isFavoriteLoading } = useGetFavoriteTracksQuery(user.access);
  
  useEffect(() => {
    if (error && error.status === 401) {
      handleRefreshApi(user.refresh)
        .then((response) => {
          updateUser(response);
        })
        .catch(() => {
          logout();
        })
    }
  }, [error, updateUser, user, logout]);

  useEffect(() => {
    setIsLoading(isAllLoading && isFavoriteLoading);
  }, [isAllLoading, isFavoriteLoading]);

  return (
    loadingError ? loadingError : 
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MenuList />
            <S.MainCenterblock>
              <Search />
              <Outlet context={{isLoading, alltracks, tokens: {access: user.access, refresh: user.refetch}, favoriteTracks}} />
            </S.MainCenterblock>
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