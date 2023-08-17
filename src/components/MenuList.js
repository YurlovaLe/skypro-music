import './MenuList.css';
import { useState } from 'react';

const items = [
  { title: 'Главное', id: 1 },
  { title: 'Мой плейлист', id: 2 },
  { title: 'Войти', id: 3 },
];

export function MenuList() {
  const listItems = items.map(item =>
    <li className="menu__item" key={item.id}>
    <a href="#" className="menu__link">{item.title}</a>
  </li>
  );

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

 return (
  <nav className="main__nav nav">
    <div className="nav__logo logo">
      <img className="logo__image" src="img/logo.png" alt="logo" />
    </div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
    </div>

    {visible && (
      <div className="nav__menu menu">
        <ul className="menu__list">{listItems}</ul>
      </div>
    )}
  </nav>

 )
}