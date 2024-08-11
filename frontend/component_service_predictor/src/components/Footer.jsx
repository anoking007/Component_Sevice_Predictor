import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Make sure to install react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-4 sm:flex-row sm:items-center">
        <a
          href="https://github.com/AyushK0808/Component_Sevice_Predictor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-2 sm:mb-0 sm:mr-4"
        >
          <FaGithub className="text-blue-400 w-6 h-6" />
        </a>
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Team UnReal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
