import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import WaveAnimation from './WaveAnimation';
import { gsap } from "gsap";

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const FadeInText = () => {
  const textRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const chars = textRef.current.children;

    gsap.fromTo(
      chars,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        onComplete: () => setIsAnimating(false), // Reset state
      }
    );
  }; // Dependencies of `triggerAnimation`

  useEffect(() => {
    triggerAnimation(); // Trigger animation on mount
  }, ); // Dependency to avoid warnings

  return (
    <div
      className="text-center text-white text-2xl font-semibold cursor-pointer"
      onClick={triggerAnimation} // Trigger on click
    >
      <span ref={textRef} className="inline-block">
        {"A passionate web developer creating beautiful and functional websites."
          .split("")
          .map((char, index) => (
            <span key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
      </span>
    </div>
  );
};



const Hero = () => {
  return (
    <motion.section
    id="hero"
    className="h-screen flex items-center justify-center bg-gray-100"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    variants={heroVariants}
  >
    
    <section id="home" className="w-full h-screen bg-gradient-to-b from-customColor via-customColorMid to-customColorHigh flex items-center justify-center">
      <section id="hero" className="w-40%"> <WaveAnimation /></section>
      <div className="text-center">
      <motion.h1 
          className="text-4xl md:text-4xl lg:text-5xl font-bold text-white"
          whileHover={{ 
            scale: 1.1,
            color: "#ffffff",  // Keep it white on hover
            textShadow: "0px 0px 8px rgb(255,255,255)"  // Add a glow effect instead
          }}
        >
        Hi, I'm Tung Nguyen
      </motion.h1>
      <motion.p 
          className="mt-4 text-base md:text-lg lg:text-xl text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
        <p className="text-xl mb-6"><FadeInText/></p>
        </motion.p>
        <Link
              to="about" 
              smooth={true} 
              duration={700} 
              className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all"
            >
          <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="bg-blue-600 text-white px-6 py-3 rounded-full"
>
  Get in Touch
</motion.button>
</Link>
      </div>

      
    </section>
    
    </motion.section>
  );
};

export default Hero;

