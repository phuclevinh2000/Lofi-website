import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { signOutAPI, signInAPI } from '../../redux/actions';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const data = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const { user } = data;

  const signOutHandler = () => {
    dispatch(signOutAPI());
  };

  const signInHandler = () => {
    dispatch(signInAPI());
  };
  return (
    <nav className='wrap'>
      <Link to='/home'>
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
          href='https://www.linkedin.com/in/phuc-le-vinh/'
        >
          <i className='fab fa-linkedin'></i>
          <span>Linkedin</span>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/phuclevinh2000'
        >
          <i className='fab fa-github'></i>
          <span>GitHub</span>
        </a>
      </div>
      <div className='nav-menu'>
        <Link to='/user'>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt='' />
          ) : (
            <img src='/assets/icons/user.svg' alt='' />
          )}

          {user && user.displayName ? (
            <span>{user.displayName}</span>
          ) : (
            <span>New User</span>
          )}
        </Link>
        {user ? (
          <Link to='/' onClick={signOutHandler}>
            <i className='fas fa-sign-out-alt'></i>
            <span>Log Out</span>
          </Link>
        ) : (
          <Link to='/' onClick={signInHandler}>
            <i className='fas fa-sign-in-alt'></i>
            <span>Log In</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
