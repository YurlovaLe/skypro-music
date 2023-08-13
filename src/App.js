import './App.css';
import { MenuList } from './components/MenuList';
import { Player } from './components/Player';
import { Sidebar } from "./components/Sidebar";
import { Tracklist } from "./components/Tracklist";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
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
              <MenuList />
            </div>
          </nav>
          <Tracklist />
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <Sidebar />
            </div>
          </div>
        </main>
        <div className="bar">
          <Player />
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
