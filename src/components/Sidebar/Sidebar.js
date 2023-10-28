import * as S from "./Sidebar.style";

export function Sidebar({ isLoading }) {

  return (
    isLoading
    ? <img src="/img/sidebar_skeleton.png" alt=""/>
    : (
    <S.SidebarList>
      <S.SidebarItem>
        <S.SidebarLink to="/category/1">
          <S.SidebarImg
            src="/img/playlist01.png"
            alt="classic music"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink to="/category/2">
          <S.SidebarImg
            src="/img/playlist02.png"
            alt="edm"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink to="/category/3">
          <S.SidebarImg
            src="/img/playlist03.png"
            alt="rock music"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    </S.SidebarList>
  ))
}