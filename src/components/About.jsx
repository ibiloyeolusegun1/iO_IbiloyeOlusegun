import React, { useState } from "react";
import {FaAward, FaBriefcase, FaHeadphones, FaFileDownload} from 'react-icons/fa'
import contactIMG from "../assets/hero.jpg";
import CountUp from "react-countup";
import CV from '../assets/Olusegun_Ibiloye_CV.pdf'
import Accordions from "./Accordions";

const About = () => {

   const [list, setList] = useState([
     {
       aim: "01 Satisfying Client",
       detail:
         "To satisfy my clients, by understanding what they actually want for their website and it's functionalities.",
         active: 1,
     },
     {
       aim: "02 Giving Client Support",
       detail:
         "To build the web app from scratch to end of the project and giving support to any problem which needs to be rectify.",
     },
     {
       aim: "03 Giving Client Instructions",
       detail:
         "After completion I give instructions on how to manage and maintain the website by themselves.",
     },
   ]);

  return (
    <section className="bg-white" id="about">
      <div className="max-w-screen mx-auto h-fit min-h-screen px-2 md:px-5 lg:px-20">
        <div className="flex items-center justify-center flex-col mb-8">
          <h1 className="text-center text-5xl text-gray-600 font-semibold">
            About Me
          </h1>
        </div>
        <div className="flex items-center justify-center max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center w-[100%]">
              <img
                src={contactIMG}
                alt="about-image"
                className="rounded-t-3xl md:h-[35rem] w-[100%] flex items-center justify-center sm:w-full"
              />
            </div>
            <div>
              <div className="flex flex-wrap gap-4">
                <div className="p-4 shadow-lg w-40 text-center flex items-center justify-center flex-grow flex-col">
                  <FaAward
                    size={25}
                    className="text-[var(--primary-dark)] mb-2"
                  />
                  <p className="text-xl font-semibold text-gray-600">
                    Experience
                  </p>
                  <span className="text-gray-600">
                    <CountUp start={1} end={3} duration={8} />
                    <span>+</span>
                    <span>Year</span>
                  </span>
                </div>
                <div className="p-4 shadow-lg w-40 text-center flex items-center justify-center flex-grow flex-col">
                  <FaBriefcase
                    size={25}
                    className="text-[var(--primary-dark)] mb-2"
                  />
                  <p className="text-xl font-semibold text-gray-600">
                    Completed
                  </p>
                  <span className="text-gray-600">
                    <CountUp start={8} end={18} duration={8} />
                    <span>+</span>
                    <span>Project</span>
                  </span>
                </div>
                <div className="p-4 shadow-lg w-40 text-center flex items-center justify-center flex-grow flex-col">
                  <FaHeadphones
                    size={25}
                    className="text-[var(--primary-dark)] mb-2"
                  />
                  <p className="text-xl font-semibold text-gray-600">Support</p>
                  <div className="flex items-center justify-center gap-1 text-gray-600">
                    <span>Online</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
              <div className="w-[100%]">
                <p className="text-base text-justify text-gray-500 my-6 space-y-4 mb-3">
                  I am IBILOYE OLUSEGUN a passionate Frontend Web Developer and
                  Designer with minimum of 3 years experience.{" "}
                </p>
                {/* <h1 className="text-xl font-semibold text-gray-600">
                  My aim and target:
                </h1> */}
                {
                  list.map((item, key) => (
                    <Accordions key={key} datas={item}/>
                  ))
                }
              </div>
              <a
                download=""
                href={CV}
                className="flex items-center justify-center mt-4 gap-3 w-[14rem] text-gray-100 rounded-xl text-[1.2rem] font-semibold bg-[var(--primary-dark)] py-4 px-6 border-2 border-[var(--primary-dark)] hover:bg-transparent hover:border-2 hover:border-[var(primary-dark)] hover:text-[var(--primary-dark)] duration-300"
              >
                Download CV <FaFileDownload size={26} className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


