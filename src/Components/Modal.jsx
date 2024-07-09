import React, { useState, useEffect, useRef } from 'react';
import "../Style/Modal.css"; // Ensure you import the CSS file

function ModalComponent({ name, songs }) {
  const [playing, setPlaying] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Cleanup function for audio elements
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlayPause = (song) => {
    if (playing && playing.title === song.title) {
      audioRef.current.pause();
      setPlaying(null);
    } else {
      if (playing) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(song.src);
      audioRef.current.play();
      setPlaying(song);
    }
  };

  const isSongPlaying = (song) => {
    return playing && playing.title === song.title;
  };

  const stopPlayback = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(null);
    }
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content blue-modal-content">
          <div className="modal-header blue-modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={stopPlayback}></button>
          </div>
          <div className="modal-body blue-modal-body">
            <p>Songs:</p>

            {songs.map((song) => (
              <div key={song.title} className="songCards3">
                <p>{song.title}</p>
                <button className="btn4" onClick={() => handlePlayPause(song)}>
                  {isSongPlaying(song) ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 19h4.5V5H6v14zm7.5 0H18V5h-4.5v14z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z" /></svg>}
                </button>
              </div>
            ))}
          </div>
          <div className="modal-footer blue-modal-footer">
            <button type="button" className="btn4" data-bs-dismiss="modal" onClick={stopPlayback}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
