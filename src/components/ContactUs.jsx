import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNode, FaPython } from 'react-icons/fa';

function ContactUs() {
  document.title = "CineVerse | Contact Us";

  return (
    <div className="min-h-screen w-screen bg-[#0F0F0F] text-white flex items-center justify-center px-4 md:px-12 py-12">
      <div className="bg-[#1A1A1A] rounded-2xl shadow-lg p-8 md:p-12 w-full md:w-2/3 lg:w-1/2 h-auto">
        
        <div className="flex flex-col items-center text-center">
          <img
            src="/Puneet.jpg" 
            alt=""
            className="w-32 h-32 rounded-full border-4 border-[#6556CD] object-cover mb-4"
          />
          <h1 className="text-3xl font-bold text-[#6556CD] mb-1">Puneet Tiwari</h1>
          <h2 className="text-xl text-zinc-400 mb-6">About Me</h2>
        </div>

        <div className="text-zinc-300 text-justify leading-relaxed space-y-4">
          <p>
            I'm <strong className="text-white">Puneet Tiwari</strong>, a passionate B.Tech 2nd year student , with a strong interest in Web Development, building cool tech projects. Currently learning React, backend development, and contributing to open-source.
          </p>
          <p>
            I enjoy turning creative ideas into working applications and am always exploring new technologies to grow my skills and build real-world solutions.
          </p>
          <p className="text-zinc-400 italic text-center">
            “Stay hungry, stay foolish.” — Steve Jobs
          </p>
        </div>
        <div className="flex justify-center gap-6 text-2xl p-5 text-white">
<a
  href="https://github.com/puneet426"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#6556CD] transition-colors"
>
  <FaGithub />
</a>
<a
  href="https://www.linkedin.com/in/puneet-tiwari-0075952a6/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#6556CD] transition-colors"
>
  <FaLinkedin />
</a>
<a
  href="https://x.com/Puneet626"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#6556CD] transition-colors"
>
  <FaTwitter />
</a>



</div>
      </div>
    </div>
  );
}

export default ContactUs;




