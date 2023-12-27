import React from 'react'
import footerLogo from '../assets/logo.png'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center flex-col justify-center bg-white border-t-2 border-[var(--primary-light)] px-2 md:px-5 lg:px-20 py-10">
        <img src={footerLogo} alt="footer logo" />
        {/* <h2>Ibiloye Olusegun</h2> */}
        <div className="flex gap-3 mb-4 mt-4">
          <a
            href="https://twitter.com/segunibiloye"
            className="bg-[var(--primary-dark)] p-3 rounded-md text-white text-xl hover:text-white hover:bg-[var(--primary-light)]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ibiloyeolusegun/"
            className="bg-[var(--primary-dark)] p-3 rounded-md text-white text-xl hover:text-white hover:bg-[var(--primary-light)]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/ibiloyeolusegun1"
            className="bg-[var(--primary-dark)] p-3 rounded-md text-white text-xl hover:text-white hover:bg-[var(--primary-light)]"
          >
            <FaGithub />
          </a>
        </div>
        <span className="mt-6 text-lg text-center font-medium text-[var(--primary-dark)]">
          {new Date().toLocaleTimeString()}
          <span className="text-gray-600 ml-2">
            &copy;OG-Tech. All Right Reserved | 2023
          </span>
        </span>
      </div>
    </div>
  );
}

export default Footer
