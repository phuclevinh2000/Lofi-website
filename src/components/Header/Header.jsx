import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { signOutAPI, changeDayNight } from '../../redux/actions';
import './Header.scss';
import { Link } from 'react-router-dom';
import DarkLightSwitch from '../DarkLightSwitch/DarkLightSwitch';

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const data = useSelector((state) => state.userState);
  const daynight = useSelector((state) => state.modeState);
  const dispatch = useDispatch();

  const { user } = data;
  const { mode } = daynight;

  const signOutHandler = () => {
    dispatch(signOutAPI());
  };

  const daynightHandler = () => {
    dispatch(changeDayNight(mode));
  };

  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <nav className='wrap'>
      <Link to='/'>
        <img src='/assets/icons/lofi-logo.gif' alt='' />
      </Link>
      <div className='nav-menu'>
        <Link to='/about'>
          <i className='fas fa-info'></i>
          <span>How it works</span>
        </Link>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/phuclevinh2000/Lofi-website'
        >
          <i className='fab fa-github'></i>
          <span>GitHub</span>
        </a>
      </div>
      <div className='nav-menu'>
        <div onClick={daynightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>

        <button onClick={fullscreenHandler} className='fullscreen-btn'>
          <i className='fas fa-expand fa-lg'></i>
        </button>
      </div>
      <div className='nav-menu'>
        <Link to='/user'>
          {user && user.photoURL && <img src={user.photoURL} alt='' />}
          {user && user.displayName && <span>{user.displayName}</span>}
        </Link>
        {user ? (
          <Link to='/' onClick={signOutHandler}>
            <i className='fas fa-sign-out-alt'></i>
            <span>Log Out</span>
          </Link>
        ) : (
          <Link to='/login'>
            <i className='fas fa-sign-in-alt'></i>
            <span>Log In</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
