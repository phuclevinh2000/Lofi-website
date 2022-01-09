import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ModifierBoard.scss';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { changeMoodStatus } from '../../redux/actions';

import ReactAudioPlayer from 'react-audio-player';
import { changeRainStatus } from '../../redux/actions';

const ModifierBoard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.moodState);
  const rainData = useSelector((state) => state.rainState);

  const { rainValue } = rainData;
  const { moodMode } = data;

  const [openMood, setOpenMood] = useState(false);
  const [openFocus, setOpenFocus] = useState(false);

  const [volume, setVolume] = useState(50);
  const [cityTraffic, setCityTraffic] = useState(0);
  const [cityRain, setCityRain] = useState(rainValue);
  const [fireplace, setFireplace] = useState(0);

  const rainSliderHandler = (e) => {
    // if slide then make it rain
    if (e.target.value > 0) dispatch(changeRainStatus('clear', cityRain));
    // if value = 0 then stop rain
    else if (e.target.value === 0) dispatch(changeRainStatus('rain', 0));
    setCityRain(e.target.value);
  };

  const openMoodHandler = () => {
    setOpenMood(!openMood);
    setOpenFocus(false);
  };

  const changeMoodHandler = (e) => {
    dispatch(changeMoodStatus(e.target.id));
  };

  return (
    <>
      {!openMood && (
        <div>
          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/musics/city_traffic.mp3'
            loop
            volume={cityTraffic / 100}
          />

          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/musics/fireplace.mp3'
            loop
            volume={fireplace / 100}
          />

          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/musics/rain_city.mp3'
            loop
            volume={rainValue / 100}
          />
        </div>
      )}
      <div className={`modifier ` + (openMood && 'mood')}>
        <div className='modifier__icon'>
          <div className={`icon ` + (openMood && 'active')}>
            <i onClick={openMoodHandler} className='fas fa-sliders-h fa-2x'></i>
          </div>
          {openMood && (
            <div className='modifierBox'>
              <h4>Mood</h4>
              <div className='options'>
                <div
                  id='sleep'
                  onClick={changeMoodHandler}
                  className={`item ` + (moodMode === 'sleep' ? 'active' : '')}
                >
                  <i id='sleep' className='fas fa-moon fa-2x'></i>
                  <span id='sleep'>Sleep</span>
                </div>
                <div
                  id='jazzy'
                  onClick={changeMoodHandler}
                  className={`item ` + (moodMode === 'jazzy' ? 'active' : '')}
                >
                  <i id='jazzy' className='fas fa-guitar fa-2x'></i>
                  <span id='jazzy'>Jazzy</span>
                </div>
                <div
                  id='chill'
                  onClick={changeMoodHandler}
                  className={`item ` + (moodMode === 'chill' ? 'active' : '')}
                >
                  <i id='chill' className='fas fa-coffee fa-2x'></i>
                  <span id='chill'>Chill</span>
                </div>
              </div>
              <div className='volume'>
                <Stack
                  spacing={2}
                  direction='row'
                  sx={{ mb: 1 }}
                  alignItems='center'
                >
                  <i className='fas fa-volume-down fa-lg'></i>
                  <Slider
                    className='volume-slider'
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                  <i className='fas fa-volume-up fa-lg'></i>
                </Stack>
              </div>
              <h5>Background Noise</h5>
              <div className='backgroundNoise'>
                <div className='noise-option'>
                  <p>City traffic</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/city_traffic.mp3'
                    loop
                    volume={cityTraffic / 100}
                  />
                  <Slider
                    className='slider'
                    value={cityTraffic}
                    onChange={(e) => setCityTraffic(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>City rain</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/rain_city.mp3'
                    loop
                    volume={rainValue / 100}
                  />
                  <Slider
                    className='slider'
                    value={rainValue}
                    onChange={rainSliderHandler}
                  />
                </div>
                <div className='noise-option'>
                  <p>Fireplace</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/fireplace.mp3'
                    loop
                    volume={fireplace / 100}
                  />
                  <Slider
                    className='slider'
                    value={fireplace}
                    onChange={(e) => setFireplace(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='modifier__icon'>
          <i className='fas fa-book-reader fa-2x'></i>
        </div>
      </div>
    </>
  );
};

export default ModifierBoard;
