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
  <ul className="menu__list">{listItems}</ul>
 )
}