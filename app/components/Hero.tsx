'use client';

import { useEffect, useState } from 'react';

const words = ['All', 'or', 'Nothing'];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero">
      <div className="hero__wrapper">
        <figure className="hero__media">
          <video
            autoPlay
            className="hero__media__video"
            loop
            muted
            playsInline
          >
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/1116125460/rendition/1080p/file.mp4?loc=external&signature=9a2e8c7c8c720bc1d6a5c130ab49fe67428bdbcc01644bc93bda076cd74b8020"
              type="video/mp4"
            />
          </video>
        </figure>

        <h1 className="hero__title">{words[currentWord]}</h1>

        <p className="hero__description paragraph--active">
          ZeroTrillion means we never aim for the middle
        </p>
      </div>
    </header>
  );
}
