import React from "react";
import { useInView } from 'react-intersection-observer';
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-25 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title remains the same */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-5 text-xl font-light max-w-xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations.
        </p>
      </div>

      {/* --- TIMELINE CONTAINER --- */}
      <div className="relative">
        {/* Vertical line remains the same */}
        <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500/20 to-pink-500/20 h-full"></div>
        
        {/* Experience Entries */}
        {experiences.map((experience, index) => {
          const isLeft = index % 2 !== 0; 
          
          // Setup the observer for each card
          const { ref, inView } = useInView({
            threshold: 0.1, 
            triggerOnce: true, 
          });

          // 💡 FIX APPLIED HERE: Use vertical translate (Y-axis) for a clean bottom-up slide.
          // This prevents horizontal overflow and the "blank UI" flash.
          const animationClass = inView
            ? "opacity-100 translate-y-0" // Final state: fully visible, no shift
            : "opacity-0 translate-y-6"; // Initial hidden state: invisible, slightly below final position
          
          return (
            <div
              key={experience.id}
              ref={ref} 
              className="flex flex-col sm:flex-row items-center mb-20 relative"
            >
              {/* Timeline Circle / Icon remains the same */}
              <div 
                className={`absolute left-4 sm:left-1/2 transform -translate-x-1/2 
                            bg-gray-900 border-4 border-purple-500 w-12 h-12 
                            rounded-full flex justify-center items-center z-20 shadow-lg`}
              >
                 <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-12 h-12 object-contain rounded-full"
                  />
              </div>

              {/* Content Card */}
              <div
                className={`w-full ${isLeft ? "sm:justify-start" : "sm:justify-end"} flex`} 
              >
                  <div
                    // 💡 APPLY FIX: Smoother vertical fade-in transition
                    className={`w-full sm:max-w-xl p-5 md:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md 
                                shadow-[0_0_20px_rgba(130,69,236,0.3)] transform transition-all duration-1000 ease-out 
                                relative ml-16 sm:ml-0 
                                ${isLeft ? "sm:mr-[calc(50%+1.5rem)]" : "sm:ml-[calc(50%+1.5rem)]"}
                                ${animationClass} // <-- NEW VERTICAL FADE-IN
                                hover:scale-[1.02]`} 
                  >
                    {/* Role, Company, and Date ... remains the same */}
                    
                    <div className="flex items-center space-x-6"> 
  
  {/* Company Logo/Image - The main visual element */}
  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"> 
    <img
      src={experience.img}
      alt={experience.company}
      // Use 'object-contain' or 'object-cover' based on how you want logos to fill the space
      className="w-full h-full object-contain p-1 bg-white rounded-md" 
    />
  </div>
  
  {/* Role, Company name, and Date */}
  <div className="flex flex-col justify-center">
    <div>
      {/* Role */}
      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
        {experience.role}
      </h3>
      
      {/* Company */}
      <h4 className="text-md text-gray-300 leading-snug">
        {experience.company}
      </h4>
      
      {/* Date */}
      <p className="text-sm text-purple-400 mt-1">
        {experience.date}
      </p>
    </div>
  </div>
</div>

                    <p className="mt-4 text-gray-300 text-sm md:text-base">
                      {experience.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h5 className="font-semibold text-white mb-2 text-sm">Skills Used:</h5>
                      <ul className="flex flex-wrap">
                        {experience.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="bg-purple-600/30 text-white px-3 py-1 text-xs rounded-full mr-2 mb-2 border border-purple-500/50"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
