import React, { useState } from 'react';

import './YoutubeVideo.scss';
import ReactPlayer from 'react-player';

const YoutubeVideo = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [submited, setSubmited] = useState(false);

  const changeYoutubeHandlder = (e) => {
    setYoutubeLink(e.target.value);
  };

  const submitYoutubeHandlder = (e) => {
    e.preventDefault();
    setSubmited(true);
  };

  return (
    <div className='youtube'>
      {submited && (
        <div className='player'>
          <ReactPlayer
            width={'200px'}
            height={'100px'}
            loop={true}
            controls={true}
            url={youtubeLink}
          />
          <button onClick={() => setSubmited(false)}>
            Choose another video
          </button>
        </div>
      )}
      {!submited && (
        <form onSubmit={submitYoutubeHandlder} className='input'>
          <input
            value={youtubeLink}
            onChange={changeYoutubeHandlder}
            placeholder='Youtube Music URL'
          />
          <button type='submit'>Submit</button>
        </form>
      )}
    </div>
  );
};

export default YoutubeVideo;
