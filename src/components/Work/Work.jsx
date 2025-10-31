import React, { useState } from "react";
import { projects } from "../../constants";
// Assuming you have icons like FaGithub and FaExternalLinkAlt available
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'; 

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  const handldeCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Re-enable background scrolling
  };

  return (
    <section
      id="work"
      // FIX: Use controlled padding and max-width for better responsiveness
      className="py-24 px-4 md:px-8 lg:px-12 mx-auto max-w-7xl font-sans relative bg-gray-950"
    >
      {/* Section Title (Consistent Styling) */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          PROJECTS 💡
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-5 text-xl font-light max-w-xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills and experience.
        </p>
      </div>
      
      {/* --- Projects Grid --- */}
      <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            // ENHANCEMENT: Glassmorphism Card Style with stronger glow
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden cursor-pointer 
                       shadow-[0_0_20px_rgba(130,69,236,0.1)] hover:shadow-[0_0_40px_rgba(130,69,236,0.5)]
                       hover:-translate-y-2 transition-transform duration-300 relative"
          >
            {/* Image Section */}
            <div className="p-4 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl transition duration-500 group-hover:scale-[1.03]"
              />
              {/* Live/Code overlay icon on hover */}
              <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <FaExternalLinkAlt className="text-white text-4xl" />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-2 line-clamp-3 text-sm">
                {project.description}
              </p>
              
              {/* Tags/Technologies */}
              <div className="mb-4 pt-2 flex flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    // ENHANCEMENT: Tag styling consistent with Skills section
                    className="inline-block bg-purple-600/30 text-xs font-medium text-purple-300 
                               rounded-full px-3 py-1 mr-2 mb-2 border border-purple-500/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* --- Project Details Modal --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 animate-fade-in"
          onClick={handldeCloseModal} // Close modal on outside click
        >
          <div 
            className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-4xl relative overflow-hidden transform transition-transform duration-300 animate-slide-up"
            onClick={(e) => e.stopPropagation()} // Prevent modal closure on inner click
          >
            {/* Close Button */}
            <button
              onClick={handldeCloseModal}
              className="absolute top-4 right-4 z-10 text-white text-3xl font-bold hover:text-purple-500 transition"
            >
              <FaTimes />
            </button>
            
            {/* Modal Content */}
            <div className="grid lg:grid-cols-2 grid-cols-1 overflow-y-auto max-h-[90vh]">
              {/* Image Column */}
              <div className="w-full bg-gray-800 p-4 lg:p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Text Content Column */}
              <div className="lg:p-8 p-6">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <div className="mb-6 pt-2">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-600/30 text-xs font-semibold text-purple-300 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 lg:text-base text-sm">
                  {selectedProject.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6 border-t border-gray-800 pt-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-1/2 bg-gray-700 hover:bg-gray-600 text-white lg:py-3 py-2 rounded-xl text-md font-semibold transition duration-200"
                  >
                    <FaGithub className="mr-2" /> View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-1/2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white lg:py-3 py-2 rounded-xl text-md font-semibold transition duration-200"
                  >
                    <FaExternalLinkAlt className="mr-2" /> View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;