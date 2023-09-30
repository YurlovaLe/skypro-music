import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./Player.style";
import RangeBar from "../RangeBar/RangeBar";
import { startPlay, stopPlay, nextTrack, prevTrack, toggleShufled } from "../../store/actions/creators/player";
import { isPlayingSelector, isShuffledSelector } from "../../store/selectors/player";

export function Player({ isLoading, alltracks, currentTrack }) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(isPlayingSelector);
  const trackInfo = alltracks.find((track) => track.id === currentTrack) || {};
  const audioRef = useRef(null);

  const [currTime, setCurrTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currVolume, setCurrVolume] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audioRef.current.load();
    dispatch(startPlay());
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", setTrackTimes);
    return () => audio.removeEventListener("timeupdate", setTrackTimes);
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.addEventListener("change", (event) =>
      setCurrVolume(event.target.volume)
    );
  }, []);

  const handleStart = () => {
    audioRef.current.play();
    dispatch(startPlay());
  };

  const handleStop = () => {
    audioRef.current.pause();
    dispatch(stopPlay())
  };

  const timeInMin = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec =
      Math.floor(seconds % 60) < 10
        ? "0" + Math.floor(seconds % 60)
        : Math.floor(seconds % 60);
    return `${min}:${sec}`;
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const manualSetCurrTime = (value) => {
    audioRef.current.currentTime = value;
  };

  const manualSetVolume = (value) => {
    audioRef.current.volume = value;
    setCurrVolume(value);
  };

  const toggleShufledPlaylist = () => {
    dispatch(toggleShufled());
  };

  const handleNext = () => {
    dispatch(nextTrack(alltracks));
    audioRef.current.play();
  };

  const handlePrev = () => {
    dispatch(prevTrack(alltracks));
    audioRef.current.play();
  };

  const setTrackTimes = (event) => {
    setDuration(isNaN(event.target.duration) ? 0 : event.target.duration);
    setCurrTime(event.target.currentTime);
  };

  const setVolumeMuted = () => {
    setIsMuted(!isMuted);
  }

  return (
    <>
      <audio loop={isRepeat ? "loop" : " "} muted={isMuted ? "muted" : ""} autoPlay ref={audioRef}>
        <source src={trackInfo.track_file} type="audio/mpeg" />
      </audio>
      <S.BarContent>
        <S.BarTime>
          {timeInMin(currTime)} / {timeInMin(duration)}
        </S.BarTime>
        <RangeBar
          currentValue={currTime}
          maxValue={duration}
          onRangeChange={manualSetCurrTime}
          color="#B672FF"
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev" onClick={handlePrev}>
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay className="_btn">
                <S.PlayerBtnPlaySvg
                  alt="play"
                  onClick={isPlaying ? handleStop : handleStart}
                >
                  <use
                    xlinkHref={
                      isPlaying
                        ? "img/icon/sprite.svg#icon-stop"
                        : "img/icon/sprite.svg#icon-play"
                    }
                  ></use>
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next" onClick={handleNext}>
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat className="_btn-icon" onClick={toggleRepeat}>
                <S.PlayerBtnRepeatSvg $isRepeat={isRepeat} alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle className="_btn-icon">
                <S.PlayerBtnShuffleSvg $isShuffled={useSelector(isShuffledSelector)} alt="shuffle" onClick={toggleShufledPlaylist}>
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              {isLoading ? (
                <img src="img/player_skeleton.png" alt="" />
              ) : (
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="http://">
                      {trackInfo.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {trackInfo.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              )}

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="_btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.BarVolumeContent>
              <S.BarVolumeImage>
                <S.BarVolumeSvg alt="volume" onClick={setVolumeMuted}>
                  <use xlinkHref={`img/icon/sprite.svg#${isMuted ? 'icon-mute' : 'icon-volume'}`}></use>
                </S.BarVolumeSvg>
              </S.BarVolumeImage>
              <S.BarVolumeProgress className="_btn">
                <RangeBar
                  currentValue={currVolume}
                  maxValue={1}
                  onRangeChange={manualSetVolume}
                  color="#D9D9D9"
                />
              </S.BarVolumeProgress>
            </S.BarVolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </>
  );
}
