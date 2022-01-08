import React from 'react';

import './RainToggleButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeRainStatus } from '../../redux/actions';

const RainToggleButton = () => {
  const dispatch = useDispatch();
  const rain = useSelector((state) => state.rainState);
  const { rainMode } = rain;

  // console.log(rainMode);

  const rainButtonHandler = () => {
    dispatch(changeRainStatus(rainMode));
  };

  return (
    <div className='wrapper'>
      <div className='button' onClick={rainButtonHandler}>
        <div className='icon'>
          <i className='fas fa-cloud-rain'></i>
        </div>
      </div>
    </div>
  );
};

export default RainToggleButton;
