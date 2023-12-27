import React from 'react'
import {AiOutlinePhone, AiOutlineClockCircle} from 'react-icons/ai'
import Logo from '../assets/logo.png'

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
        <div className="hidden md:flex items-center px-4 cursor-pointer">
          <AiOutlinePhone
            size={20}
            className="mr-1 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">09039176489</p>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 bg-[var(--primary-dark)] rounded-xl border-[var(--primary-dark)] border-2 text-white hover:bg-transparent hover:border-2 hover:border-[var(primary-dark)] hover:text-[var(--primary-dark)] duration-300"
        >
          Contact me
        </a>
      </div>
    </div>
  );
}

export default Topbar
