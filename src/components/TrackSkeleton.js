import './Track.css'

export function TrackSkeleton() {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <img src="img/track_skeleton.png" />
      </div>
    </div>
  )
}