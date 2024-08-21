import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";

import { useGetAllTracksQuery, useGetFavoriteTracksQuery } from "../services/catalog";
import { currentTrackSelector } from "../store/selectors/player";
import { UserContext } from "../App";
import { handleRefreshApi } from "../api";

import { MenuList } from "../components/MenuList/MenuList";
import { Player } from "../components/Player/Player";
import { Sidebar } from "../components/Sidebar/Sidebar";
import * as S from "../App.styles";

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
              <Outlet context={{isLoading, alltracks, tokens: {access: user.access, refresh: user.refetch}, favoriteTracks}} />
            </S.MainCenterblock>
            <S.MainSidebar>
              <S.SidebarPersonal>
                <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
                <S.SidebarIcon onClick={logout}>
                  <svg alt="logout">
                    <use xlinkHref="/img/icon/sprite.svg#logout"></use>
                  </svg>
                </S.SidebarIcon>
              </S.SidebarPersonal>
              <S.SidebarBlock>
                <Routes>
                  <Route
                    path="/"
                    element={<Sidebar isLoading={isLoading} />}
                  />
                </Routes>
              </S.SidebarBlock>
            </S.MainSidebar>
          </S.Main>
          <S.Bar>
            {
              currentTrack
              ? <Player isLoading={isLoading} alltracks={alltracks} currentTrack={currentTrack} favoriteTracks={favoriteTracks} />
              : null
            }
          </S.Bar>
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default MainPage;