import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGithub,
  FaJs,
  FaNode,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="bg-neutral-700 w-2/4 h-44 flex items-center justify-center relative -top-12  shadow-xl ml-48 rounded-lg">
      <div className="text-col w-full rounded-lg flex items-center justify-around text-gray-500 text-6xl">
        <div className="flex flex-col items-center hover:text-teal-700 ">
          <FaHtml5 />
          <p className="text-base">HTML</p>
        </div>
        <div className="flex flex-col items-center hover:text-teal-700 ">
          <FaCss3 />
          <p className="text-base">CSS</p>
        </div>
        <div className="flex flex-col items-center hover:text-teal-700 ">
          <FaJs />
          <p className="text-base">JavaScript</p>
        </div>
        <div className="flex flex-col items-center hover:text-teal-700 ">
          <FaReact />
          <p className="text-base">React</p>
        </div>
        <div className="flex flex-col items-center hover:text-teal-700 ">
          <FaGithub />
          <p className="text-base">Github</p>
        </div>
        <div className="flex flex-col items-center hover:text-teal-700 ">
          <FaNode />
          <p className="text-base">NodeJS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
