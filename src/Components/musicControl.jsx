import React from 'react';
import '../Style/musicControl.css';

const MusicControl = ({ playing }) => {
  return (
    <>
      <h3>{playing ? playing.title : 'No song selected'}</h3>
      {playing ? (
        
        <audio
          src={playing.src}
          controls
          className="audio"
          autoPlay
        />
      ) : (
        <div>No song selected</div>
      )}
    </>
  );
};

export default MusicControl;
