import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MainNav = styled.nav`
  max-width: 208px;
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
`;

export const NavBurger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const BurgerLine = styled.span`
  width: 20px;
  height: 1px;
  background-color: #d3d3d3;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  cursor: pointer;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const MenuItem = styled.li`
`;

export const MenuLink = styled(Link)`
  color: #ffffff;
`;
