import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" md:px-[2vw] lg:px-[2vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          SKILLS
        </h2>
        <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
          A collection of my technical skills and proficiencies.
        </p>
      </div>

      {/* --- OUTER SCROLLABLE CATEGORIES CONTAINER --- */}
      <div
        className=" lg:flex-auto md:flex gap-5 py-10 overflow-x-auto scroll-smooth snap-x snap-mandatory relative z-10 px-4 md:px-0 snap-container"
        // Use the global CSS classes instead of inline styles for scrollbar hiding where possible
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            // 'group' enables hover targeting on children
            className="group bg-gray-900/70 backdrop-blur-sm p-3 flex-shrink-0 snap-center
                                w-[90vw] md:w-[49%] lg:w-[49%] mb-4
                                rounded-2xl border border-gray-800 shadow-[0_0_20px_rgba(130,69,236,0.1)] 
                                transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,69,236,0.4)]"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {category.title}
            </h3>

            {/* --- INNER SKILLS SCROLL CONTAINER --- */}
            <div className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div
                className="flex w-max scroll-smooth overflow-x-auto whitespace-nowrap inner-scroll-container
                                       animate-infinite-scroll group-hover:[animation-play-state:paused] group-hover:cursor-grab"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {/* RENDER THE SKILLS LIST TWICE FOR THE INFINITE LOOP */}
                {[...category.skills, ...category.skills].map(
                  (skill, index) => (
                    <Tilt
                      key={`${skill.name}-${index}`}
                      options={{
                        max: 10,
                        perspective: 1000,
                        scale: 1.01,
                        speed: 500,
                      }}
                      className="flex-shrink-0 mx-2"
                    >
                      {/* Individual Skill Badge (Compact Size) */}
                      <div className="flex flex-col items-center justify-center p-2 w-24 h-24 rounded-lg transform transition-all duration-300 ease-in-out bg-gray-800/50 border border-gray-700 hover:bg-gray-700/70 hover:scale-[1.05] hover:border-purple-500/50">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-10 h-10 mb-1"
                        />
                        <span className="text-xs text-white font-medium text-center">
                          {skill.name}
                        </span>
                      </div>
                    </Tilt>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
