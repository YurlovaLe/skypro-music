import React from 'react';
import { RangeBar } from '../RangeBar';

import { VolumeBarProps } from './VolumeBar.types';

import * as S from './VolumeBar.styles';

export function VolumeBar({
  setVolumeMuted, isMuted, currVolume, manualSetVolume,
}: VolumeBarProps) {
  return (
    <S.BarVolumeBlock>
      <S.BarVolumeImage>
        <S.BarVolumeSvg onClick={setVolumeMuted}>
          <use xlinkHref={`/img/icon/sprite.svg#${isMuted ? 'icon-mute' : 'icon-volume'}`} />
        </S.BarVolumeSvg>
      </S.BarVolumeImage>
      <RangeBar
        currentValue={currVolume}
        maxValue={1}
        onRangeChange={manualSetVolume}
        color="#D9D9D9"
      />
    </S.BarVolumeBlock>
  );
}
