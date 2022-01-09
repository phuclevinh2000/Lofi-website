import React from 'react';

import './Home.scss';
import { useSelector } from 'react-redux';
import RainToggleButton from '../RainToggleButton/RainToggleButton';
import ModifierBoard from '../ModifierBoard/ModifierBoard';
import ReactAudioPlayer from 'react-audio-player';

const Home = () => {
  const daynight = useSelector((state) => state.modeState);
  const rain = useSelector((state) => state.rainState);

  const { mode } = daynight;
  const { rainMode } = rain;

  const combineMode = `${mode}-${rainMode}`;

  // console.log(combineMode);
  return (
    <>
      {/* Embedded the background video base on each state */}
      {/* Night */}
      <video
        className={combineMode === 'night-clear' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Night-clear.mp4' type='video/mp4' />
      </video>
      <video
        className={combineMode === 'night-rain' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Night-rainny.mp4' type='video/mp4' />
      </video>
      {/* Day */}
      <video
        className={combineMode === 'day-clear' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Day-sunny.mp4' type='video/mp4' />
      </video>
      <video
        className={combineMode === 'day-rain' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Day-rainny.mp4' type='video/mp4' />
      </video>
      <RainToggleButton />
      <ModifierBoard />
    </>
  );
};

export default Home;
