import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-5 md:px-10 lg:px-20">
      <div className="flex items-center">
        <a href="/">
          <img src={Logo} alt="logo" width={40} />
        </a>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex items-center px-4 cursor-pointer">
          <AiOutlineClockCircle
            size={20}
            className="mr-1 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">24/7</p>
        </div>
        <div className="hidden md:flex items-center px-4 cursor-pointer border-2 border-orange-400">
          <FaPhoneAlt size={17} className="mr-1 text-[var(--primary-dark)]" />
          <a href="tel:09039176489" className="text-sm text-gray-700 p-2">
            09039176489
          </a>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 ml-4 bg-[var(--primary-dark)] rounded-xl border-[var(--primary-dark)] border-2 text-white hover:bg-transparent hover:border-2 hover:border-[var(primary-dark)] hover:text-[var(--primary-dark)] duration-300"
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Topbar;
