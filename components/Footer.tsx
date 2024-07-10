import React from 'react';

export const Footer = () => {
  return (
    <div className="flex justify-center items-center p-2">
      <div className="text-center">
        <p>{new Date().getFullYear()} &copy; All rights reserved</p>
        <p>Made by Praneeth Ravuri</p>
      </div>
    </div>
  );
};
