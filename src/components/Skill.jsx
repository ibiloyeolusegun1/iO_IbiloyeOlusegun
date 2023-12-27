import React from "react";
import { skills } from "../data/datas";
import { FaCheckCircle } from "react-icons/fa";

const Skill = () => {
  return (
    <section className="bg-white" id="skill">
      <div className="max-w-screen mx-auto px-2 md:px-5 lg:px-20 ">
        <div className="flex items-center justify-center flex-col mb-8">
          <p className="text-center text-lg text-[var(--primary-dark)] font-semibold">
            My Technical Level
          </p>
          <h1 className="text-center text-5xl text-gray-600 font-semibold">
            Skills
          </h1>
        </div>

        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((item, index) => (
            <div
              key={index}
              className="px-4 py-6 border-2 border-[var(--primary-light)] cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <FaCheckCircle className="text-green-700 mb-3" size={25} />
              <h2 className="text-xl sm:text-2xl text-gray-700 font-semibold">
                {item.name}
              </h2>
              <p className="text-gray-500">{item.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
