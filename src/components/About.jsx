import React from 'react';

function About() {
  document.title = "CineVerse | About";

  return (
    <div className="w-full min-h-screen px-6 py-12 bg-[#0F0F0F] text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#6556CD] mb-6">About CineVerse</h1>
        <p className="text-lg text-zinc-300 mb-4">
          <strong>CineVerse</strong> is your one-stop destination to explore trending movies and TV shows from around the world.
          Our platform provides detailed information, trailers, and trending content updated daily and weekly across categories.
        </p>
        <p className="text-lg text-zinc-300 mb-4">
          Whether you're a movie buff or just browsing for your next binge-watch, CineVerse offers a seamless experience
          to discover what's hot in the entertainment world. Dive into a universe of films and series with intuitive filters
          like category, duration, and genre.
        </p>
        <p className="text-lg text-zinc-300 mb-4">
          Built with modern web technologies and powered by real-time data, CineVerse ensures that you always stay up-to-date
          with the latest trailers, ratings, and releases — all in one place.
        </p>
        <p className="text-lg text-zinc-300">
          Thank you for choosing <strong>CineVerse</strong> — your gateway to cinematic discovery!
        </p>
      </div>
    </div>
  );
}

export default About;
