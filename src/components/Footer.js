import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
        
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://www.linkedin.com/in/tung-nguyen-a48b61235/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-all"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/tungthnguyen0901" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-all"
          >
            <FaGithub />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-all"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tung Eric Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
