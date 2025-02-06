import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/Project1.gif";
import image2 from "../assets/SapphireVn.jpg";
import image3 from "../assets/Project3.gif";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };
  
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
const projects = [
  {
    title: "Product One",
    description: "ERP Adapter using C#",
    image: image1,
    link: "https://www.linkedin.com/products/dicentral-s-order-management-software-system-dioms/"
  },
  {
    title: "Project Two",
    description: "Sapphire Packaging Company Websites",
    image: image2,
    link: "https://sapphirevn.com/"
  },
  {
    title: "Project Three",
    description: "A portfolio website showcasing my basic designs.",
    image: image3,
    link: "https://sapphirevn.com/"
  }
];

const Projects = () => {
  return (
    <motion.section
    id="projects"
    className="py-20 bg-gradient-to-b from-customColor via-customColorMid to-customColorHigh"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={containerVariants}
  >
      <div className="container mx-auto px-4 text-center">
        <motion.h3 
          className="text-2xl md:text-3xl lg:text-4xl pb-5 font-bold text-white"
          whileHover={{ 
            scale: 1.1,
            color: "#ffffff",  // Keep it white on hover
            textShadow: "0px 0px 8px rgb(255,255,255)"  // Add a glow effect instead
          }}
        >
        My Projects
      </motion.h3>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
                        <motion.div
                        key={index}
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        variants={projectVariants}
                      >
            <div 
              key={index} 
              className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="text-blue-600 font-bold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.section>
  );
};

export default Projects;
