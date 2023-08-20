import { Search } from "./Search";
import { Filter } from "./Filter";
import { Track } from "./Track";
import { TrackSkeleton } from "./TrackSkeleton";
import './Tracklist.css'


const items = [
  { link: '/img/icon/sprite.svg#icon-note', name: 'Guilt', singer: 'Nero', album: 'Welcome Reality', time: '4:44', id: 1 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Elektro', singer: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22', id: 2 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'I’m Fire', singer: 'Ali Bakgor', album: 'I’m Fire', time: '2:22', id: 3 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Non Stop', comment: '(Remix)', singer: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12', id: 4 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Run Run', comment: '(feat. AR/CO)', singer: 'Jaded, Will Clarke, AR/CO<', album: 'Run Run', time: '2:54', id: 5 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Eyes on Fire', comment: '(Zeds Dead Remix)', singer: 'Blue Foundation, Zeds Dead', album: 'Eyes on Fire', time: '5:20', id: 6 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Mucho Bien', comment: '(Hi Profile Remix)', singer: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', album: 'Mucho Bien', time: '3:41', id: 7 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Knives n Cherries', singer: 'minthaze', album: 'Captivating', time: '1:48', id: 9 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Knives n Cherries', singer: 'minthaze', album: 'Captivating', time: '1:48', id: 10 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Knives n Cherries', singer: 'minthaze', album: 'Captivating', time: '1:48', id: 11 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Knives n Cherries', singer: 'minthaze', album: 'Captivating', time: '1:48', id: 12 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Knives n Cherries', singer: 'minthaze', album: 'Captivating', time: '1:48', id: 13 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Knives n Cherries', singer: 'minthaze', album: 'Captivating', time: '1:48', id: 14 },
  { link: 'img/icon/sprite.svg#icon-note', name: 'Knives n Cherries', singer: 'minthaze', album: 'Captivating', time: '1:48', id: 15 },
  { link: 'img/icon/sprite.svg#icon-like', name: 'How Deep Is Your Love', singer: 'Calvin Harris, Disciples', album: 'How Deep Is Your Love', time: '3:32', id: 16 },
  { link: 'img/icon/sprite.svg#icon-like', name: 'Morena', singer: 'Tom Boxer', album: 'Soundz Made in Romania', time: '3:36', id: 17 },
  { link: 'img/icon/sprite.svg#icon-like', name: '', singer: '', album: '', time: '', id: 18 },
];


export function Tracklist({ isLoading }) {
  const listItem = items.map(item =>
    isLoading 
    ? <TrackSkeleton /> 
    : <Track
        comment={item.comment}
        link={item.link}
        name={item.name}
        singer={item.singer}
        album={item.album}
        time={item.time}
        key={item.id}
      />
  )

  return (
    <div className="main__centerblock centerblock">
    <Search />
    <h2 className="centerblock__h2">Треки</h2>
    <Filter />
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        {listItem}
      </div>
    </div>
  </div>
  )
}