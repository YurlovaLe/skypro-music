import './MenuList.css';

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

 return (
  <nav className="main__nav nav">
    <div className="nav__logo logo">
      <img className="logo__image" src="img/logo.png" alt="logo" />
    </div>
    <div className="nav__burger burger">
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
    <div className="nav__menu menu">
      <ul className="menu__list">{listItems}</ul>
    </div>
  </nav>

 )
}