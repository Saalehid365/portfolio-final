import React from "react";
import vectore from "../assests/software.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex  bg-teal-700 text-white justify-center h-2/3 px-40">
      <div className="pt-12 h-12 flex flex-col  items-start justify-between text-gray-300">
        <h1 className="text-7xl mt-24 w-3/4 ">Anthony Nelson</h1>
        <p className="text-4xl mt-4 text-gray-400 w-3/4">
          Front-End Web Developer
        </p>
        <p className="text-2xl mt-3 w-1/2 text-gray-400">
          I'm passionate about devloping and building applications that lead to
          the success of the overall product.
        </p>
        <div className="mt-5 w-72 flex items-center justify-between">
          <p className="border-2 w-32 p-2 flex justify-center items-center uppercase hover:bg-teal-600 border-gray-300 rounded-md">
            contact me
          </p>
          <p className="text-3xl">
            <FaGithub />
          </p>
          <p className="text-3xl">
            <FaLinkedin />
          </p>
        </div>
      </div>
      <div className="mt-24 pb-9 opacity-75">
        <img className="h-85  w-90" src={vectore} alt="laptop"></img>
      </div>
    </div>
  );
};

export default Hero;
