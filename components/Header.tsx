"use client";
import React, { useState, useCallback } from 'react';

const Header = () => {
  const teluguLetters = 'అఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహళక్షజ్ఞ';

  const generateRandomLetters = useCallback(() => {
    let result = '';
    for (let i = 0; i < 1000; i++) {
      result += teluguLetters[Math.floor(Math.random() * teluguLetters.length)];
    }
    return result;
  }, []);

  const [letters, setLetters] = useState(generateRandomLetters());

  const changeLetters = useCallback(() => {
    setLetters(generateRandomLetters());
  }, [generateRandomLetters]);

  return (
    <div
      className='relative flex items-center justify-center lg:justify-start h-full p-2 overflow-hidden cursor-default'
      onMouseEnter={changeLetters}
      onMouseMove={changeLetters}
    >
      <h1 className='text-5xl md:text-7xl font-bold text-center lg:text-left z-10 text-text-primary'>
        PRANEETH RAVURI
      </h1>
      <div
        className='absolute top-0 left-0 w-full h-full opacity-20'
        style={{
          fontSize: '24px',
          lineHeight: '1',
          overflow: 'hidden',
          wordWrap: 'break-word'
        }}
      >
        <p className='tracking-widest'>{letters}</p>
      </div>
    </div>
  );
};

export default Header;
