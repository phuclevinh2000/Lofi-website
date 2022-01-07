import React from 'react';

import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className='container'>
      <nav className='container__nav'>
        <Link to='/'>
          <img src='/assets/icons/lofi-logo.gif' alt='' />
        </Link>
        <div className='nav-menu'>
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
          <Link to='/about'>
            <i className='fas fa-info'></i>
            <span>About us</span>
          </Link>
          <Link to='/login'>
            <i className='fas fa-sign-in-alt'></i>
            <span>Log In</span>
          </Link>
        </div>
      </nav>
      <section className='container__section'>
        <h1>Welcome to the auto genrate lofi music made by Phuc Le.</h1>
        <h1>Login to explore the feature</h1>
        <div className='form'>
          <div className='icon'>
            <img src='/assets/icons/google.svg' alt='' />
            Sign in with Google
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
