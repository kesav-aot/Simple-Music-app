import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/nav';
import './App.css';
import Songs from './Components/Songs';
import Artist from './Components/Artist';
import MusicControl from './Components/musicControl';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState(null);
  const valueRef = useRef(null);
  const songRef = useRef(null);

  const initialSongs = [
    {
      title: 'Rainy Day Vibes',
      artist: 'Sleepy Fish',
      img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJmT-HgMm37VZikgMPdksxBh8VZr6FmCu_Q&s',
      src: "./assets/songs/lofi1.mp3"
    },
    {
      title: 'Autumn Leaves',
      artist: 'Philanthrope',
      img_src: 'https://miro.medium.com/v2/resize:fit:1358/0*FjF2hZ8cJQN9aBxk.jpg',
      src: 'https://mp3.chillhop.com/serve.php/?mp3=10024'
    },
    {
      title: 'Chill Study',
      artist: 'Sleepy Fish',
      img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxLWLQczhTD12WfNMrC2qGLxwlCSNNj7NHA&s',
      src: './assets/songs/lofi2.mp3'
    },
    {
      title: 'Afternoon Drive',
      artist: 'Philanthrope',
      img_src: 'https://i.scdn.co/image/ab67616d00001e028cf47bc256b732a9467e61bb',
      src: './assets/songs/lofi3.mp3'
    },
    {
      title: 'Rainy Night Study',
      artist: 'Sleepy Fish',
      img_src: 'https://i.scdn.co/image/ab67616d0000b2735419c0986ee778b7489da418',
      src: './assets/songs/music.mp3'
    },
    {
      title: 'Autumn Breeze',
      artist: 'Philanthrope',
      img_src: 'https://cdn.sanity.io/images/zhgxj6ko/production/28e86705f63f0dd82ddcad915d839ac1ff599737-1024x1024.jpg?auto=format',
      src: './assets/songs/music2.mp3'
    },
    {
      title: 'Chill Beats',
      artist: 'Sleepy Fish',
      img_src: 'https://miro.medium.com/v2/resize:fit:1358/0*FjF2hZ8cJQN9aBxk.jpg',
      src: './assets/songs/jb3.mp3'
    },
    {
      title: 'Autumn Nostalgia',
      artist: 'Philanthrope',
      img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjnv-uTzOlGhQyANPCNfLw3VDtVH2vhRfvA&s',
      src: './assets/songs/jb1.mp3'
    },
    {
      title: 'Rainy Day Study',
      artist: 'Sleepy Fish',
      img_src: 'https://w0.peakpx.com/wallpaper/561/395/HD-wallpaper-lo-fi-girl-listening-music-ultra-artistic-anime-girl-music-listening-lofi.jpg',
      src: './assets/songs/jb2.mp3'
    },
    {
      title: 'Autumn Reflections',
      artist: 'Philanthrope',
      img_src: 'https://cdn.sanity.io/images/zhgxj6ko/production/28e86705f63f0dd82ddcad915d839ac1ff599737-1024x1024.jpg?auto=format',
      src: './assets/songs/music3.mp3'
    },
    {
      title: 'Chill Playlist',
      artist: 'Sleepy Fish',
      img_src: 'https://miro.medium.com/v2/resize:fit:1358/0*FjF2hZ8cJQN9aBxk.jpg',
      src: './assets/songs/jb1.mp3'
    },
    {
      title: 'Autumn Solace',
      artist: 'Philanthrope',
      img_src: 'https://cdn.sanity.io/images/zhgxj6ko/production/28e86705f63f0dd82ddcad915d839ac1ff599737-1024x1024.jpg?auto=format',
      src: './assets/songs/lofi2.mp3'
    },
  ];

  const handlePlayPause = (song) => {
    if (playing && playing.src === song.src) {
      playing.audio.pause();
      setPlaying(null);
    } else {
      if (playing) {
        playing.audio.pause();
      }
      song.audio.play();
      setPlaying(song);
    }
  };

  useEffect(() => {
    const newSongs = initialSongs.map(s => {
      const audio = new Audio(s.src);
      return { ...s, audio };
    });

    setSongs(newSongs);

    return () => {
      newSongs.forEach(s => s.audio.pause());
    };
  }, []);

  valueRef.current = playing;
  songRef.current = initialSongs;

  return (
    <>
      <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Songs
        searchTerm={searchTerm}
        songs={songs}
        handlePlayPause={handlePlayPause}
        isSongPlaying={(song) => playing && playing.src === song.src}
      />
      <Artist searchTerm={searchTerm} />
      <MusicControl playing={playing} />
      <div><p>© 2023. All Rights Reserved.</p></div>
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWrapper;
