import React from 'react';
import './NotFound.css'; // for animated background

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#fdf6f0]">
      {/* Animated Background Circles */}
      <div className="absolute w-full h-full z-0 animated-bg" />

      <div className="z-10 text-center p-10 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl max-w-md w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
        <div className="text-6xl mb-4">🎀</div>
        <h1 className="text-3xl font-bold text-pink-600 mb-2">404 - Not Found</h1>
        <p className="text-zinc-600 mb-6">Oh no! The page you’re looking for has gone missing.</p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};
