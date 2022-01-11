import React, { useState } from 'react';

import { chill } from '../../data/songData';
import './Footer.scss';
import Player from '../Player/Player';

const Footer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(1);

  return (
    <div className='footer'>
      <div className='author'>
        <span>Made by Phuc Le, inspired by Lofi.co</span>
      </div>
      <div className='controller'>
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={chill}
        />
      </div>
    </div>
  );
};

export default Footer;
