import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import * as S from "./MenuList.style";

export function MenuList() {
  const { logout } = useContext(UserContext);

  const items = [
    { title: "Главное", id: 1, link: "/" },
    { title: "Мой плейлист", id: 2, link: "/favorites" },
    { title: "Выйти", id: 3, action: logout },
  ];

  const listItems = items.map((item) => (
    <S.MenuItem key={item.id}>
      <S.MenuLink to={item.link} onClick={item.action}>{item.title}</S.MenuLink>
    </S.MenuItem>
  ));

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>

      {visible && (
        <S.NavMenu>
          <S.MenuList>{listItems}</S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
