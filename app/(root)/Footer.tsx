import React from 'react';
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4  text-white">
      <div className="text-center">
        <p className="text-sm">
          {new Date().getFullYear()} &copy; All rights reserved | Made with <FaHeart className="inline text-text-primary mx-1" /> by Praneeth Ravuri
        </p>
      </div>
    </footer>
  );
};
