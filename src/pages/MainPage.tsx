import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { useGetAllTracksQuery, useGetFavoriteTracksQuery } from '../services/catalog';
import { selectPlayer } from '../store/slices';
import { useAppSelector } from '../store/hooks';
import { useUserContext } from '../App.context';
import { handleRefreshApi } from '../api';

import { MenuList } from '../components/MenuList';
import { Player } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

import * as S from '../App.styles';

export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

export function MainPage(): JSX.Element {
  const { user, logout, updateUser } = useUserContext();

  const {
    data: allTracksData = [],
    error: loadingError,
    isLoading: isAllLoading,
  } = useGetAllTracksQuery();
  const {
    data: favoriteTracksData = [],
    error,
    isLoading: isFavoriteLoading,
  } = useGetFavoriteTracksQuery(user.access);

  const { currentTrackId } = useAppSelector(selectPlayer);
  const [isLoading, setIsLoading] = useState(true);

  const alltracks = useMemo(() => (
    allTracksData.map(({ _id: id, genre, ...otherTrackData }) => ({
      id,
      genre: genre[0],
      ...otherTrackData,
    }))
  ), [allTracksData]);

  const favoriteTracks = useMemo(() => (
    favoriteTracksData.map(({ _id: id, genre, ...otherTrackData }) => ({
      id,
      genre: genre[0],
      ...otherTrackData,
    }))
  ), [favoriteTracksData]);

  useEffect(() => {
    if (isFetchBaseQueryError(error) && (error as FetchBaseQueryError).status === 401) {
      handleRefreshApi(user.refresh)
        .then((response) => {
          updateUser(response);
        })
        .catch(() => {
          logout();
        });
    }
  }, [error, updateUser, user, logout]);

  useEffect(() => {
    setIsLoading(isAllLoading && isFavoriteLoading);
  }, [isAllLoading, isFavoriteLoading]);

  return (
    loadingError
      ? <div>Error</div>
      : (
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <MenuList />
              <S.MainCenterBlock>
                <Outlet context={{
                  isLoading,
                  alltracks,
                  tokens: {
                    access: user.access,
                    refresh: user.refresh,
                  },
                  favoriteTracks,
                }}
                />
              </S.MainCenterBlock>
              <S.MainSideBar>
                <S.SideBarPersonal>
                  <div>{user.username}</div>
                  <S.SideBarIcon onClick={logout}>
                    <svg>
                      <use xlinkHref="/img/icon/sprite.svg#logout" />
                    </svg>
                  </S.SideBarIcon>
                </S.SideBarPersonal>
                <S.SideBarBlock>
                  <Routes>
                    <Route
                      path="/"
                      element={<Sidebar isLoading={isLoading} />}
                    />
                  </Routes>
                </S.SideBarBlock>
              </S.MainSideBar>
            </S.Main>
            <S.Bar>
              {
              currentTrackId
                ? (
                  <Player
                    isLoading={isLoading}
                    alltracks={alltracks}
                    currentTrack={currentTrackId}
                    favoriteTracks={favoriteTracks}
                  />
                )
                : null
          }
            </S.Bar>
          </S.Container>
        </S.Wrapper>
      )
  );
}
