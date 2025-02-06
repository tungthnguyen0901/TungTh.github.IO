import React, { useState, useEffect } from 'react';
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
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all ${
        isScrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex gap-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
