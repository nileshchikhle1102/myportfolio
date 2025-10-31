import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
// Assuming you have an icon library like react-icons installed
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'; 

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false); 
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "Nchikhle1102", // Replace with your EmailJS Service ID
        "Nchikhle1102_template_id", // Replace with your EmailJS Template ID
        form.current,
        "ezp5hX7onujlTvciB" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsLoading(false);
          form.current.reset();
          toast.success("Message Sent Successfully! I'll be in touch soon.", { autoClose: 3000, theme: "dark" });
        },
        (error) => {
          setIsLoading(false);
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.", { autoClose: 4000, theme: "dark" });
        }
      );
  };

  return (
    <section
      id="contact"
      // Center and limit max width of the entire section
      className="py-24 px-4 md:px-8 lg:px-12 mx-auto max-w-7xl font-sans"
    >
      <ToastContainer />
      
      {/* Section Title (Consistent Styling) */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          GET IN TOUCH 🤝
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-5 text-xl font-light max-w-2xl mx-auto">
          I'd love to hear about collaboration opportunities or questions about my work.
        </p>
      </div>
      
      {/* --- SPLIT PANEL LAYOUT --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          
        {/* LEFT PANEL: Contact Info & Socials (1/3 Width on Desktop) */}
        <div 
            className="lg:col-span-1 p-8 rounded-xl backdrop-blur-md 
                       bg-white/5 border border-white/10 h-full
                       shadow-[0_0_40px_rgba(130,69,236,0.3)] transition-all duration-300"
        >
            <h3 className="text-3xl font-bold text-white mb-6">
                Contact Details
            </h3>
            
            {/* Info Items */}
            <div className="space-y-6 text-gray-300">
                <p className="flex items-center text-lg">
                    <FiMail className="text-purple-400 w-6 h-6 mr-3 flex-shrink-0" />
                    chikhlenilesh@gmail.com
                </p>
                <p className="flex items-center text-lg">
                    <FiPhone className="text-purple-400 w-6 h-6 mr-3 flex-shrink-0" />
                    +91 820-865-4908
                </p>
                <p className="flex items-center text-lg">
                    <FiMapPin className="text-purple-400 w-6 h-6 mr-3 flex-shrink-0" />
                    Nagpure, Maharashtra, India
                </p>
            </div>

            <hr className="my-8 border-gray-700" />
            
            {/* Social Links */}
            <h3 className="text-2xl font-bold text-white mb-4">
                Let's Connect
            </h3>
            <div className="flex space-x-6">
                <a href="https://github.com/nileshchikhle1102" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition duration-200">
                    <FiGithub className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/nileshchikhle/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition duration-200">
                    <FiLinkedin className="w-8 h-8" />
                </a>
                {/* Add more socials here */}
            </div>
        </div>


        {/* RIGHT PANEL: Form (2/3 Width on Desktop) */}
        <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">
                Send a Message
            </h3>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-4 p-0"
            >
                {/* Inputs in a 2-column grid on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Your Name" required
                        className="p-4 rounded-lg bg-gray-800/80 text-white border-2 border-gray-700 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200 placeholder-gray-500"
                    />
                    <input type="email" name="user_email" placeholder="Your Email" required
                        className="p-4 rounded-lg bg-gray-800/80 text-white border-2 border-gray-700 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200 placeholder-gray-500"
                    />
                </div>
                
                <input type="text" name="subject" placeholder="Subject" required
                    className="p-4 rounded-lg bg-gray-800/80 text-white border-2 border-gray-700 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200 placeholder-gray-500"
                />

                <textarea name="message" placeholder="Message" rows="6"
                    className="p-4 rounded-lg bg-gray-800/80 text-white border-2 border-gray-700 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200 placeholder-gray-500"
                ></textarea>
                
                {/* Send Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`py-4 text-white font-bold rounded-lg transition duration-300
                                ${isLoading 
                                    ? "bg-gray-600 cursor-not-allowed flex items-center justify-center" 
                                    : "bg-gradient-to-r from-purple-600 to-pink-500 opacity-95 hover:opacity-100 hover:shadow-xl hover:shadow-purple-500/30"
                                }`}
                >
                    {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending...
                    </>
                    ) : (
                    "Send Message"
                    )}
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;