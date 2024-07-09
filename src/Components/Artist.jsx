import React, { useState } from "react";
import "../Style/Artist.css";
import ModalComponent from './Modal';

function Artist({ searchTerm }) {
  const [selectedArtist, setSelectedArtist] = useState(null);
  
  const artists = [
    {
      id: 1,
      name: "Justin Bieber",
      img: "https://variety.com/wp-content/uploads/2017/09/justin_bieber.png",
      songs: [
        { title: "Peaches", src: "./src/assets/songs/jb1.mp3" },
        { title: "Sorry", src: "./src/assets/songs/jb2.mp3" }
      ]
    },
    {
      id: 2,
      name: "Lofi Girl",
      img: "https://w0.peakpx.com/wallpaper/561/395/HD-wallpaper-lo-fi-girl-listening-music-ultra-artistic-anime-girl-music-listening-lofi.jpg",
      songs: [
        { title: "Chill Beats", src: "./src/assets/songs/lofi1.mp3" },
        { title: "Relaxing Music", src: "./src/assets/songs/lofi2.mp3" }
      ]
    },
    {
      id: 3,
      name: "Sleepy Fish",
      img: "https://w0.peakpx.com/wallpaper/561/395/HD-wallpaper-lo-fi-girl-listening-music-ultra-artistic-anime-girl-music-listening-lofi.jpg",
      songs: [
        { title: "Nap Time", src: "./src/assets/songs/lofi3.mp3" },
        { title: "Dreamy", src: "./src/assets/songs/music.mp3" }
      ]
    },
    {
      id: 4,
      name: "Philanthrope",
      img: "https://cdn.sanity.io/images/zhgxj6ko/production/28e86705f63f0dd82ddcad915d839ac1ff599737-1024x1024.jpg?auto=format",
      songs: [
        { title: "Jazz Hop", src: "./src/assets/songs/jb3.mp3" },
        { title: "Lo-Fi Vibes", src: "./src/assets/songs/music2.mp3" }
      ]
    },
    {
      id: 5,
      name: "Sleepy Fish",
      img: "https://w0.peakpx.com/wallpaper/561/395/HD-wallpaper-lo-fi-girl-listening-music-ultra-artistic-anime-girl-music-listening-lofi.jpg",
      songs: [
        { title: "Nap Time", src: "./src/assets/songs/music3.mp3" },
        { title: "Dreamy", src: "./src/assets/songs/music4.mp3" }
      ]
    }
  ];

  const handleButtonClick = (artist) => {
    setSelectedArtist(artist);
  };

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="artistDiv">
      <h1>Artist</h1>
     
      <div className="cardArtist">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <div key={artist.id} className="artistCard">
              <img src={artist.img} alt={artist.name} className='artistImg' />
              <h3 className="artistName">{artist.name}</h3>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="btn2"
                onClick={() => handleButtonClick(artist)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <p>No artists found</p>
        )}
      </div>
      {selectedArtist && <ModalComponent {...selectedArtist} />}
    </div>
  );
}

export default Artist;
