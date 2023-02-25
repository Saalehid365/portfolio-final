import React from "react";
import { FaGithub, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-teal-900 flex h-60  p-4 justify-center w-full">
      <div className="w-full bg-teal-800 flex  items-center justify-evenly">
        <div className="flex bg-neutral-700 h-12 w-60 items-center justify-evenly rounded-md text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaTwitter />
          <FaSkype />
        </div>
        <div>
          <p>ID365</p>
        </div>
        <div className="text-lg text-neutral-400">
          <p>Anelson2711@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
