import React from 'react';

import './Home.scss';
import { useSelector } from 'react-redux';

const Home = () => {
  const daynight = useSelector((state) => state.modeState);

  const { mode } = daynight;

  return (
    <>
      <video
        className={mode === 'night' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Night-clear.mp4' type='video/mp4' />
      </video>
      <video
        className={mode === 'day' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Day-sunny.mp4' type='video/mp4' />
      </video>
    </>
  );
};

export default Home;
