import { Search } from "./Search";
import { Filter } from "./Filter";
import { Track } from "./Track";
import { TrackSkeleton } from "./TrackSkeleton";
import './Tracklist.css'

export function Tracklist({ isLoading, items }) {
  const authors = items.map(item => item.singer);
  const listItem = items.map((item, index) =>
    isLoading 
    ? <TrackSkeleton key={index} /> 
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
    <Filter authors={[...new Set(authors)]}/>
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