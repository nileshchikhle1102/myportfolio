import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // NOTE: activeSection functionality usually requires an Intersection Observer logic for scrolling state, 
  // which is complex to implement fully here but is correctly initialized.
  const [activeSection, setActiveSection] = useState(""); 
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Sets scrolled state when user scrolls past 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    // Added Contact link for completeness
    { id: "contact", label: "Contact" }, 
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 md:px-8 lg:px-12 
        ${isScrolled 
          ? "bg-gray-900/90 backdrop-blur-md shadow-xl border-b border-purple-500/20" // Glassmorphism background on scroll
          : "bg-transparent"
        }`}
    >
      {/* Centering Wrapper */}
      <div className="text-white py-5 flex justify-between items-center mx-auto max-w-7xl">
        
        {/* Logo (Used gradient text look for consistency) */}
        <div className="text-xl font-extrabold cursor-pointer">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            &lt;Nilesh/Chikhle&gt;
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition duration-200 
                ${activeSection === item.id 
                  ? "text-purple-400 font-semibold" 
                  : "hover:text-purple-400"
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (Visible on md and up) */}
        <div className="hidden lg:flex space-x-6">
          <a
            href="https://github.com/nileshchikhle1102"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nileshchikhle/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-purple-400 cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-purple-400 cursor-pointer transition"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isOpen && (
        <div 
          // FIX: Full-screen overlay for better mobile UX
          className="fixed inset-0 top-[70px] bg-gray-950/95 backdrop-blur-lg z-40 lg:hidden transform transition-opacity duration-300"
        >
          <ul className="flex flex-col items-center space-y-8 py-10 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-xl font-semibold transition duration-200 
                  ${activeSection === item.id ? "text-purple-400" : "hover:text-white"}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            
            {/* Mobile Social Icons */}
            <hr className="w-1/3 border-gray-700 my-4" />
            <div className="flex space-x-6">
              <a href="https://github.com/nileshchikhle1102" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-pink-400">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/nileshchikhle/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-pink-400">
                <FaLinkedin size={28} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;