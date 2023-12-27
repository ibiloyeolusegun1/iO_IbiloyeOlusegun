import React from "react";
import HeroIMG from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="section bg-white">
      <div className="max-w-screen mx-auto h-fit min-h-screen px-2 md:px-5 lg:px-20 ">
        <div className="flex items-center justify-center h-full w-full">
          <div className="flex flex-col items-center w-full h-full lg:justify-between md:flex-row-reverse md:gap-6 lg:gap-12">
            <div className="w-[100%] flex items-center justify-center md:justify-end sm:mb-12">
              <img
                src={HeroIMG}
                alt="hero"
                width={500}
                className="rounded-xl"
              />
            </div>
            <div className="text-center md:text-left w-[100%]">
              <h1 className="text-5xl font-bold text-gray-600 leading-snug">
                Ibiloye Olusegun
              </h1>
              <h3 className="text-2xl font-semibold text-[var(--primary-dark)] py-4">
                Web App Developer
              </h3>
              <p className="pb-10 text-gray-500">
                I am IBILOYE OLUSEGUN a passionate Frontend Web Developer and
                Designer with minimum of 2 years experience.
              </p>
              <a
                href="#contact"
                className="px-8 text-[1.2rem] py-3 pb-4 bg-[var(--primary-dark)] rounded-xl border-[var(--primary-dark)] border-2 text-white hover:bg-transparent hover:border-2 hover:border-[var(primary-dark)] hover:text-[var(--primary-dark)] duration-300"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
