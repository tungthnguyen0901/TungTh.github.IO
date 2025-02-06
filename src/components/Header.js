import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.header
      className={`border-2 border-indigo-900 inset-x-0 fixed mx-auto w-3/4 py-4 px-6 my-4 bg-indigo-1000 rounded-full shadow-lg transition-all duration-700 ease-in-out ${
        isScrolled ? 'bg-customColorMid text-white' : 'bg-transparent text-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="container mx-auto w-full px-10 flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Tung Nguyen</h1>
        <ul className="flex gap-6">
          <li>
            <Link 
              to="hero" 
              smooth={true} 
              duration={700} 
              className="cursor-pointer hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={700} 
              className="cursor-pointer hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={700} 
              className="cursor-pointer hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={700} 
              className="cursor-pointer hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
