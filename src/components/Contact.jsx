import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaTelegramPlane, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="max-w-screen mx-auto px-2 md:px-5 lg:px-20">
        <div className="flex items-center justify-center flex-col mb-8">
          <p className="text-center text-lg text-[var(--primary-dark)] font-semibold">
            Get In Touch
          </p>
          <h1 className="text-center text-5xl text-gray-600 font-semibold">
            Contact
          </h1>
        </div>

        <div className="flex items-center justify-center max-w-[900px] m-auto mt-10">
          <div className="grid md:grid-cols-2 md:gap-2 lg:gap-8 w-[100%]">
            <div className="flex flex-col w-[100%] md:w-[20rem]">
              <div className="flex flex-col border-2 p-4 mb-4 rounded-xl shadow-lg items-center justify-center">
                <FaEnvelope size={30} className="text-red-400" />
                <span className="text-[1.3rem] text-gray-500 font-semibold">
                  Email
                </span>
                <span className="text-md text-gray-600">
                  Ibiloyeolusegun.1@gmail.com
                </span>
              </div>
              <div className="flex flex-col border-2 p-4 mb-4 rounded-xl shadow-lg items-center justify-center">
                <FaWhatsapp size={30} className="text-green-500" />
                <span className="text-[1.3rem] text-gray-500 font-semibold">
                  Whatsapp
                </span>
                <span className="text-md text-gray-600">09039176489</span>
              </div>
              <div className="flex flex-col border-2 p-4 mb-4 rounded-xl shadow-lg items-center justify-center">
                <FaLinkedinIn size={30} className="text-blue-500" />
                <span className="text-[1.3rem] text-gray-500 font-semibold">
                  Linkedin
                </span>
                <span className="text-md text-gray-600">Ibiloye Olusegun</span>
              </div>
            </div>
            <div className="w-[100%]">
              <form className="flex flex-col gap-4 w-[100%]">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-2 border-gray-300 px-3 py-3 rounded-lg outline-none focus:border-[var(--primary-dark)] w-[100%]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 border-gray-300 px-3 py-3 rounded-lg outline-none focus:border-[var(--primary-dark)]"
                />
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Write Your Project"
                  className="border-2 border-gray-300 px-3 py-3 rounded-lg outline-none focus:border-[var(--primary-dark)] resize-none h-[10rem]"
                />
                <button className="flex items-center justify-center gap-3 w-[12rem] text-gray-100 rounded-xl text-[1rem] font-semibold bg-[var(--primary-dark)] py-4 px-4 border-2 border-[var(--primary-dark)] hover:bg-transparent hover:border-2 hover:border-[var(primary-dark)] hover:text-[var(--primary-dark)] duration-300">
                  Send Message <FaTelegramPlane size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
