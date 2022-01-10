import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <img src='/assets/icons/prev.svg' alt='' />

      {/* <!-- play --> */}
      <img src='/assets/icons/play.svg' alt='' />
      {/* <!-- pause --> */}
      <img src='/assets/icons/pause.svg' alt='' />
      {/* <!-- next --> */}
      <img src='/assets/icons/next.svg' alt='' />
    </div>
  );
};

export default Footer;
