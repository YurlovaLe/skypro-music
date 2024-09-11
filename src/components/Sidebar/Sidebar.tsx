import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Sidebar.styles.tsx';

export function Sidebar({ isLoading }: {isLoading: boolean}) {
  return (
    isLoading
      ? <img src="/img/sidebar_skeleton.png" alt="" />
      : (
        <>
          <S.SidebarItem>
            <Link to="/category/1">
              <S.SidebarImg
                src="/img/playlist01.png"
                alt="classic music"
              />
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/category/2">
              <S.SidebarImg
                src="/img/playlist02.png"
                alt="edm"
              />
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/category/3">
              <S.SidebarImg
                src="/img/playlist03.png"
                alt="rock music"
              />
            </Link>
          </S.SidebarItem>
        </>
      ));
}
