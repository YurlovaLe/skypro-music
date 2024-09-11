import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../App.context.tsx';
import * as S from './MenuList.styles.tsx';

export function MenuList() {
  const { logout } = useUserContext();

  const items = [
    { title: 'Главное', id: 1, link: '/' },
    { title: 'Мой плейлист', id: 2, link: '/favorites' },
    {
      title: 'Выйти',
      id: 3,
      action: logout,
      link: '',
    },
  ];

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.MainNav>
      <Link to="/">
        <S.LogoImage src="/img/logo.png" alt="logo" />
      </Link>
      <S.NavMenu>
        <S.NavBurger onClick={toggleVisibility}>
          <S.BurgerLine />
          <S.BurgerLine />
          <S.BurgerLine />
        </S.NavBurger>
        {visible && (
          <S.MenuList>
            {
              items.map((item) => (
                <S.MenuItem key={item.id} onClick={toggleVisibility}>
                  <S.MenuLink to={item.link} onClick={item.action}>{item.title}</S.MenuLink>
                </S.MenuItem>
              ))
            }
          </S.MenuList>
        )}
      </S.NavMenu>
    </S.MainNav>
  );
}
