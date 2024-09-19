/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  startPlay, stopPlay, nextTrack, prevTrack, toggleShufled, selectPlayer,
} from '../../store/slices';

import { timeInMin } from '../../App.helpers';
import { useLikeClick } from '../../hooks/useLikeClick';

import { VolumeBar } from '../VolumeBar';
import { RangeBar } from '../RangeBar';

import { PlayerProps } from './Player.types';
import { TrackType } from '../../App.types';

import * as S from './Player.styles';

export function Player({
  isLoading,
  alltracks,
  currentTrack,
  favoriteTracks,
}: PlayerProps) {
  const dispatch = useAppDispatch();
  const handleLikeClick = useLikeClick();
  const { isPlaying, isShuffled } = useAppSelector(selectPlayer);
  const trackInfo = alltracks.find((track) => track.id === currentTrack) || {};
  const isTrackInFavorites = !!favoriteTracks.find(({ id }) => id === currentTrack);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  const [currTime, setCurrTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currVolume, setCurrVolume] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    (audioRef.current as HTMLAudioElement).load();
    dispatch(startPlay());
  }, [currentTrack, dispatch]);

  useEffect(() => {
    const audio = (audioRef.current as HTMLAudioElement);
    audio.addEventListener('timeupdate', setTrackTimes);
    return () => audio.removeEventListener('timeupdate', setTrackTimes);
  }, [isPlaying]);

  useEffect(() => {
    (audioRef.current as HTMLAudioElement).addEventListener('change', (event) => setCurrVolume((event.target as HTMLMediaElement).volume));
  }, []);

  const handleStart = () => {
    (audioRef.current as HTMLAudioElement).play();
    dispatch(startPlay());
  };

  const handleStop = () => {
    (audioRef.current as HTMLAudioElement).pause();
    dispatch(stopPlay());
  };

  const toggleShufledPlaylist = () => {
    dispatch(toggleShufled());
  };

  const handleNext = () => {
    dispatch(nextTrack());
  };

  const handlePrev = () => {
    dispatch(prevTrack());
  };

  const setTrackTimes = (event: Event) => {
    setDuration(isNaN((event.target as HTMLMediaElement).duration)
      ? 0
      : (event.target as HTMLMediaElement).duration);
    setCurrTime((event.target as HTMLMediaElement).currentTime);
  };

  return (
    <>
      <audio
        loop={isRepeat}
        muted={isMuted}
        autoPlay
        ref={audioRef}
        onEnded={handleNext}
      >
        <source src={(trackInfo as TrackType).track_file} type="audio/mpeg" />
      </audio>
      <S.BarContent>
        <S.BarTime>
          {timeInMin(currTime)}
          {' '}
          /
          {' '}
          {timeInMin(duration)}
        </S.BarTime>
        <RangeBar
          currentValue={currTime}
          maxValue={duration}
          onRangeChange={(value) => (audioRef.current as HTMLAudioElement).currentTime = value}
          color="#B672FF"
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtn>
                <S.PlayerBtnNextSvg onClick={handlePrev}>
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtn>
              <S.PlayerBtn>
                <S.PlayerBtnPlaySvg
                  onClick={isPlaying ? handleStop : handleStart}
                >
                  <use
                    xlinkHref={
                      isPlaying
                        ? 'img/icon/sprite.svg#icon-stop'
                        : 'img/icon/sprite.svg#icon-play'
                    }
                  />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtn>
              <S.PlayerBtn>
                <S.PlayerBtnNextSvg onClick={handleNext}>
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtn>
              <S.PlayerBtn onClick={() => setIsRepeat(!isRepeat)}>
                <S.PlayerBtnSvg $isUse={isRepeat}>
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnSvg>
              </S.PlayerBtn>
              <S.PlayerBtn>
                <S.PlayerBtnSvg
                  $isUse={isShuffled}
                  onClick={toggleShufledPlaylist}
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnSvg>
              </S.PlayerBtn>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              {isLoading ? (
                <img src="img/player_skeleton.png" alt="" />
              ) : (
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg>
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    {(trackInfo as TrackType).name}
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    {(trackInfo as TrackType).author}
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              )}
              <S.TrackLikeSvg
                $isFavorite={isTrackInFavorites}
                onClick={() => handleLikeClick(isTrackInFavorites, currentTrack)}
              >
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackLikeSvg>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <VolumeBar
            setVolumeMuted={() => setIsMuted(!isMuted)}
            isMuted={isMuted}
            currVolume={currVolume}
            manualSetVolume={(value) => {
              (audioRef.current as HTMLAudioElement).volume = value;
              setCurrVolume(value);
            }}
          />
        </S.BarPlayerBlock>
      </S.BarContent>
    </>
  );
}
