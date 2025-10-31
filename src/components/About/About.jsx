import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile3.png";

const About = () => {
  return (
    <section
      id="about"
      // md:px-[2vw] lg:px-[2vw] font-sans bg-skills-gradient 
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[5vw] font-sans mt-16 md:mt-24 lg-mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side  */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I'm
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Nilesh Chikhle
          </h2>

          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#cf0000a3] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "MERN Stack Developer",
                "React Developer",
                "JavaScript Developer",
              ]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
            <span className="text-[#8245ec]">|</span>
          </h3>
          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a full-stack developer passionate about turning legacy systems
            into fast, scalable, and future-ready platforms. At SimpleWorks
            Solutions, I rebuilt the company’s CRM from the ground up—evolving a
            bulky PHP monolith into a React + Node.js microservices ecosystem.
            The result? 30% faster load times, 40% less tech debt, and a
            smoother developer and user experience. I love designing real-time,
            automated, and data-driven systems that keep teams connected and
            workflows flowing. Clean code, smart architecture, and performance
            are my trademarks—because great software shouldn’t just work, it
            should feel effortless.
          </p>
          {/* Resume Button */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "liner-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 15px #8245ec",
            }}
          >
            Download CV
          </a>
        </div>
        {/* Right Side  */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:h-64 md:w-[25rem] md:h-[25rem] border-2 rounded-full parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Nilesh Chikhle"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130, 69, 236, 0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
