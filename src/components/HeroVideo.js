import React from 'react';

const HeroVideo = ({ current }) => {
  return (
    <div className="video-player">
      <video
        className="video-player__video"
        poster={current.image}
        controls
      ></video>
    </div>
  );
};
export default HeroVideo;