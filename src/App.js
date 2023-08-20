import React, { useState, useEffect } from 'react';
import { MenuList } from './components/MenuList';
import { Player } from './components/Player';
import { Sidebar } from "./components/Sidebar";
import { Tracklist } from "./components/Tracklist";
import './App.css';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MenuList />
          <Tracklist isLoading={isLoading} />
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
              <Sidebar isLoading={isLoading} />
            </div>
          </div>
        </main>
        <div className="bar">
          <Player isLoading={isLoading} />
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
