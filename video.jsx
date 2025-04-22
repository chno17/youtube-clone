import React from 'react';
import sampleVideo from '../../assets/sample_video.mp4';

const Video = () => {
  return (
    <video src={sampleVideo} controls />
  );
};

export default Video;
