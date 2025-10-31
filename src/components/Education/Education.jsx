import React from "react";
// 🚨 Ensure this library is installed: npm install react-intersection-observer
import { useInView } from 'react-intersection-observer'; 
// Assuming 'education' is imported from "../../constants"
import { education } from "../../constants"; 

const Education = () => {
  return (
    <section
      id="education"
      // Use standard Tailwind padding and center the section with a max-width
      className="py-16 pb-24 px-4 md:px-8 lg:px-12 font-sans bg-gray-950 mx-auto max-w-7xl"
    >
      {/* Section Title (Consistent Style) */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          EDUCATION 📚
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-5 text-xl font-light max-w-xl mx-auto">
          My education has been a journey of growth and learning, shaping me into the professional I am today.
        </p>
      </div>

      {/* --- TIMELINE CONTAINER --- */}
      <div className="relative">
        {/* Vertical line: Consistent gradient line with correct positioning */}
        <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500/20 to-pink-500/20 h-full"></div>
        
        {/* Education Entries */}
        {education.map((edu, index) => {
          const isLeft = index % 2 !== 0; // Determines if the card should be on the left side on desktop
          
          // 💡 INTERACTIVITY: Setup the observer for each card
          const { ref, inView } = useInView({
            threshold: 0.1, 
            triggerOnce: true, 
          });

          // Animation classes (Bottom-up fade-in)
          const animationClass = inView
            ? "opacity-100 translate-y-0" // Final state
            : "opacity-0 translate-y-6"; // Initial hidden state
          
          return (
            <div
              key={edu.id}
              ref={ref} // Attach the observer ref
              className="flex flex-col sm:flex-row items-center mb-20 relative"
            >
              {/* Timeline Circle / Icon */}
              <div 
                className={`absolute left-4 sm:left-1/2 transform -translate-x-1/2 
                            bg-gray-900 border-4 border-purple-500 w-12 h-12 
                            rounded-full flex justify-center items-center z-20 shadow-lg`}
              >
                 <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-10 h-10 object-contain rounded-full"
                  />
              </div>

              {/* Content Card */}
              <div
                className={`w-full ${isLeft ? "sm:justify-start" : "sm:justify-end"} flex`} 
              >
                  <div
                    // Card Style: Glassmorphism look (bg-white/5, backdrop-blur)
                    // Responsive Spacing: Uses the calc() formula for perfect desktop alignment
                    className={`w-full sm:max-w-xl p-5 md:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md 
                                shadow-[0_0_20px_rgba(130,69,236,0.3)] transform transition-all duration-1000 ease-out 
                                relative ml-16 sm:ml-0 
                                ${isLeft ? "sm:ml-[calc(50%+1.5rem)]" : "sm:mr-[calc(50%+1.5rem)]"}
                                ${animationClass} // <-- FADE-IN EFFECT
                                hover:scale-[1.02]`} 
                  >
                    
                    {/* --- HEADER: Logo-Driven Style --- */}
                    <div className="flex items-center space-x-4 mb-3 border-b border-white/10 pb-3">
                        {/* School Logo/Image */}
                        <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0"> 
                            <img
                                src={edu.img}
                                alt={edu.school}
                                className="w-full h-full object-contain p-1 bg-white rounded-md" 
                            />
                        </div>
                        {/* Degree, School name, and Date */}
                        <div className="flex flex-col justify-center">
                            <div>
                                {/* Degree */}
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                    {edu.degree}
                                </h3>
                                {/* School */}
                                <h4 className="text-md text-gray-300 leading-snug">
                                    {edu.school}
                                </h4>
                                {/* Date */}
                                <p className="text-sm text-purple-400 mt-1">
                                    {edu.date}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* --- END HEADER --- */}

                    {/* Grade */}
                    <p className="mt-4 text-gray-300 font-semibold">
                        <span className="text-purple-400 mr-1">Grade:</span> {edu.grade}
                    </p>
                    
                    {/* Description */}
                    <p className="mt-2 text-gray-300 text-sm md:text-base">
                        {edu.desc}
                    </p>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;