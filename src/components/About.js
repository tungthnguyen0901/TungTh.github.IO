import React, { useEffect, useRef, useState } from "react";
import profileImage from "../assets/TungNguyenLogo.jpg";
import { motion } from 'framer-motion';
import { gsap } from "gsap";


const FadeInText = () => {
  const textRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const chars = textRef.current.children;

    gsap.fromTo(
      chars,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => setIsAnimating(false), // Allow re-triggering if needed
      }
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          triggerAnimation();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the text is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <div className="text-center text-white text-2xl font-semibold cursor-pointer">
      <span ref={textRef} className="inline-block">
        {"I'm a passionate web developer with a focus on building responsive and user-friendly websites. I specialize in creating seamless user experiences and writing clean, maintainable code. With 3+ years of experience in frontend technologies, I enjoy learning new skills and collaborating with teams to bring creative projects to life."
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

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-b from-customColorHigh via-customColorMid to-customColor"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 text-center">
      <motion.h3 
          className="text-2xl md:text-3xl lg:text-4xl pb-5 font-bold text-white"
          whileHover={{ 
            scale: 1.1,
            color: "#ffffff",  // Keep it white on hover
            textShadow: "0px 0px 8px rgb(255,255,255)"  // Add a glow effect instead
          }}
        >
        About Me
      </motion.h3>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-64 h-64 mb-6 md:mb-0 md:w-1/3">
          {
            <img
              src={profileImage}
              alt="TungNguyenLogo"
              className="rounded-full w-full h-full object-contain"
            />
          }
          </div>
          <div className="md:w-3/4 md:pl-1">
          <p className="text-xl mb-6"><FadeInText/></p>
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Check Out My Work
            </a>
          </div>
        </div>
      </div>
    </section>
    </motion.section>
  );
};

export default About;