import React, { useState } from 'react';

import './RainToggleButton.scss';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { changeRainStatus } from '../../redux/actions';
import ReactAudioPlayer from 'react-audio-player';

const RainToggleButton = () => {
  const dispatch = useDispatch();
  const rain = useSelector((state) => state.rainState);
  const { rainMode, rainValue } = rain;

  const [cityRain, setCityRain] = useState(rainValue);
  const [buttonClick, setButtonClick] = useState(false);

  const rainButtonHandler = () => {
    if (rainValue === 0) dispatch(changeRainStatus(rainMode, 50));
    else dispatch(changeRainStatus(rainMode, 0));
    setButtonClick(!buttonClick);
  };

  const rainSliderHandler = (e) => {
    // if slide then make it rain
    if (e.target.value > 0) dispatch(changeRainStatus('clear', cityRain));
    // if value = 0 then stop rain
    else if (e.target.value === 0) dispatch(changeRainStatus('rain', 0));
    setCityRain(e.target.value);
  };

  return (
    <div className='wrapper'>
      <div
        className='button'
        onClick={rainButtonHandler}
        // onMouseOver={}
        // onMouseOut={MouseOut}
      >
        <div className='icon'>
          <i className='fas fa-cloud-rain'></i>
        </div>
        {buttonClick && (
          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/musics/rain_city.mp3'
            loop
            volume={rainValue / 100}
          />
        )}
      </div>
    </div>
  );
};

export default RainToggleButton;
