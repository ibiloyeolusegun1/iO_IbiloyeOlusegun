import React from 'react'
import whatsappLogo from "../assets/whatsappLogo.png";
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  return (
    <div
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8"
      style={{ zIndex: "6", left: "initial" }}
    >
      <a
        href="https://wa.me/+23409039176489?text=How can i be of help?"
        target="_blank"
      >
        <div className="bg-white flex items-center p-1 pl-2 rounded-md shadow-md shadow-gray-300">
          <span className="text-gray-600 mr-2">Chat with me</span>
          <FaWhatsapp className="text-green-600 text-[1.6rem] md:text-[3rem]" />
        </div>
      </a>
    </div>
  );
}

export default Whatsapp
