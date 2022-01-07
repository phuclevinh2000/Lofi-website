import React from 'react';
import Header from '../Header/Header';

import './Home.scss';

const Home = () => {
  return (
    <>
      <video className='videoTag' autoPlay loop muted>
        <source src='/assets/video/Day-sunny.mp4' type='video/mp4' />
      </video>
    </>
  );
};

export default Home;
