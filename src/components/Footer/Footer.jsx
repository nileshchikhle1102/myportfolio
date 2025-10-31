import React from "react";
// Using the icons already defined in your Contact component (FiGithub, FiLinkedin)
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"; 

const Footer = () => {
  // Assuming the handleScroll function is defined here or passed down
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-purple-500/30 text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        
        {/* Author Name */}
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Nilesh Chikhle
        </h2>

        {/* --- Navigation Links --- */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 text-sm md:text-base transition duration-200 
                         hover:text-white hover:underline hover:underline-offset-4 my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        {/* Divider */}
        <hr className="border-gray-700 w-24 mx-auto mb-6" />

        {/* --- Social Icons --- */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.linkedin.com/in/nileshchikhle/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition duration-300">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/nileshchikhle1102" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition duration-300">
            <FaGithub className="w-6 h-6" />
          </a>
          {/* Include other existing icons if desired */}
          {/* <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition duration-300">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition duration-300">
            <FaInstagram className="w-6 h-6" />
          </a> */}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Nilesh Chikhle. Crafted with 💜. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;