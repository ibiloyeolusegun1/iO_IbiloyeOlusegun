import React from "react";
import { works } from "../data/datas";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section className="bg-white" id="portfolio">
      <div className="max-w-screen mx-auto px-2 md:px-5 lg:px-20 ">
        <div className="flex items-center justify-center flex-col mb-8">
          <p className="text-center text-lg text-[var(--primary-dark)] font-semibold">
            Recent Work
          </p>
          <h1 className="text-center text-5xl text-gray-600 font-semibold">
            My Portfolio
          </h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl mb-8 h-[16rem] md:h-[18rem] lg:h-[20rem] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.image}
                className="rounded-xl shadow-2xl w-[100%] h-[100%] hover:scale-95 transition-all duration-300"
              />
              <div className="absolute bg-white w-3/4 md:w-3/4 m-auto shadow-md py-4 px-6 rounded-xl left-0 right-0 -bottom-10">
                <h2 className="text-xl sm:text-2xl text-[var(--primary-dark)] font-semibold">
                  {item.name}
                </h2>
                <a
                  href={item.link}
                  className="flex items-center font-semibold text-gray-600 hover:text-[var(--primary-dark)]"
                >
                  View App <FaArrowRight className="ml-3" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
