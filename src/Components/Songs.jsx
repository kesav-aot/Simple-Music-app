import React from 'react';
import "../Style/Songs.css";

const Songs = ({ searchTerm, songs, handlePlayPause, isSongPlaying }) => {
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="songs">
      <h1>Songs</h1>
      <div className="songCards">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div className="cards" key={song.title} id='cards'>
              <img src={song.img_src} alt={song.title} className='img1' />
              <h3>{song.title}</h3>
              <h4>{song.artist}</h4>
              <button className="btn" onClick={() => handlePlayPause(song)}>
                {isSongPlaying(song) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M6 19h4.5V5H6v14zm7.5 0H18V5h-4.5v14z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          ))
        ) : (
          <div className="noSongs">
            <h3>No song to play</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Songs;
