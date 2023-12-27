import React, { useState, useEffect } from 'react'
import { FaBars, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <nav
      className={`w-full h-[50px] flex items-center z-40 justify-between text-white bg-[var(--primary-dark)] px-5 md:px-10 lg:px-20 ${
        isSticky ? "sticky top-0 left-0 right-0" : ""
      }`}
    >
      <ul className="hidden sm:flex">
        <li className="px-4 hover:underline">
          <a href="/">Home</a>
        </li>
        <li className="px-4 hover:underline">
          <a href="about">About</a>
        </li>
        <li className="px-4 hover:underline">
          <a href="#skill">Skills</a>
        </li>
        <li className="px-4 hover:underline">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="px-4 hover:underline">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex justify-between z-10">
        <a href="https://twitter.com/segunibiloye">
          <FaTwitter
            size={20}
            className="mx-2 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300"
          />
        </a>
        <a href="https://www.linkedin.com/in/ibiloyeolusegun/">
          <FaLinkedinIn
            size={20}
            className="mx-2 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300"
          />
        </a>
        <a href="https://github.com/ibiloyeolusegun1">
          <FaGithub
            size={20}
            className="mx-2 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300"
          />
        </a>
      </div>

      <div className="sm:hidden z-10" onClick={handleNav}>
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>

      {/* Mobile View */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden sm:hidden ease-in duration-300 absolute rounded-tr-3xl rounded-br-3xl text-gray-100 left-0 top-[60px] w-[80%] h-[80vh] px-4 py-7 bg-[#da7434]/80 flex flex-col justify-center items-center"
            : "absolute h-[80vh] w-[80%] left-[-100%] top-[60px] ease-in duration-300 justify-center items-center"
        }
      >
        <ul className="w-full h-full text-center pt-12">
          <li className="text-2xl py-4">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-4">
            <a href="#about">About</a>
          </li>
          <li className="text-2xl py-4">
            <a href="#skill">Skills</a>
          </li>
          <li className="text-2xl py-4">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="text-2xl py-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
