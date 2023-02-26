import React, { useState } from "react";
import project1 from "../assests/homeed.jpg";
import project2 from "../assests/traditionalwellness.jpg";
import homeedVid from "../assests/homeedVid.mov";
import { FaHtml5, FaCss3, FaReact, FaJs, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [modal1, setModal1] = useState(false);

  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  return (
    <div className="bg-neutral-700 min-w-min  max-h-max flex flex-col items-center justify-evenly pt-48">
      <div>
        <p className="text-4xl text-gray-300 mb-48">
          Latest
          <span className="border-b-2 p-2 border-yellow-500">projects</span>
        </p>
      </div>
      {/* --- project1 --- */}
      <div className="flex justify-around w-screen px-28 mb-48 md:flex md:flex-col md:items-center md:px-0">
        <div className="md:flex md:items-center md:justify-center">
          <img
            className="h-96 w-5/6 rounded-xl "
            src={project1}
            alt="project1"
          ></img>
        </div>
        <div className="flex flex-col justify-center w-2/5 md:w-full md:flex md:items-center">
          <p className="text-3xl text-gray-400 md:mt-8">
            Home school Trip Planner
          </p>
          <p className="w-4/5 text-lg mt-3 text-gray-500">
            A Web Application for a client for easy access for the parents to
            view and purchase tickets for upcoming trips for their children.
          </p>
          <div className="flex items-center pt-4 justify-between w-3/4 text-gray-500 md:w-1/2 sm:w-full sm:flex sm:justify-evenly">
            <p>Made with</p>
            <div className="bg-neutral-800 w-72 h-12 flex items-center justify-evenly  text-gray-500 text-4xl rounded-md sm:w-52">
              <FaHtml5 />
              <FaCss3 />
              <FaJs />
              <FaReact />
            </div>
          </div>
          <div className="flex w-72 justify-between mt-12">
            <button
              onClick={toggleModal1}
              className="bg-teal-700 border-solid w-32 rounded-md text-gray-400 text-2xl hover:bg-teal-600 hover:text-gray-300"
            >
              Demo
            </button>
            <a
              href="https://github.com/Saalehid365/homeschoolTrippy"
              className="h-12 w-32 flex  items-center justify-evenly border border-solid border-gray-400 rounded-md text-gray-400 text-2xl hover:bg-neutral-600 hover:text-gray-300"
            >
              <FaGithub />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* --- project2 --- */}
      <div className="flex flex-row-reverse justify-around w-screen px-28 mb-48 md:flex md:flex-col md:items-center md:px-0">
        <div className="md:flex md:items-center md:justify-center">
          <img
            className="h-96 w-5/6 rounded-xl "
            src={project2}
            alt="project2"
          ></img>
        </div>
        <div className="flex flex-col justify-center w-2/5 md:w-full md:flex md:items-center sm:items-center">
          <p className="text-3xl text-gray-400 md:mt-8 sm:pl-8">
            Traditional Wellness Website
          </p>
          <p className="w-4/5 text-lg mt-3 text-gray-500">
            A Website for a clients health store wh ich includes a personal blog
            page
          </p>
          <div className="flex items-center pt-4 justify-between w-3/4 text-gray-500 md:w-1/2 sm:w-full sm:flex sm:justify-evenly">
            <p>Made with</p>
            <div className="bg-neutral-800 w-72 h-12 flex items-center justify-evenly  text-gray-500 text-4xl rounded-md sm:w-52">
              <FaHtml5 />
              <FaCss3 />
              <FaJs />
              <FaReact />
            </div>
          </div>
          <div className="flex w-72 justify-between mt-12">
            <button className="bg-teal-700 border-solid w-32 rounded-md text-gray-400 text-2xl hover:bg-teal-600 hover:text-gray-300">
              Demo
            </button>
            <a
              href="https://github.com/Saalehid365/irish-sea-moss-website"
              className="h-12 w-32 flex  items-center justify-evenly border border-solid border-gray-400 rounded-md text-gray-400 text-2xl hover:bg-neutral-600 hover:text-gray-300"
            >
              <FaGithub />
              Code
            </a>
          </div>
        </div>
      </div>
      {/* --- project3 --- */}
      <div className="flex justify-around w-screen px-28 mb-48 md:flex md:flex-col md:items-center md:px-0">
        <div className="md:flex md:items-center md:justify-center">
          <img
            className="h-96 w-5/6 rounded-xl "
            src={project1}
            alt="project1"
          ></img>
        </div>
        <div className="flex flex-col justify-center w-2/5 md:w-full md:flex md:items-center">
          <p className="text-3xl text-gray-400 md:mt-8">
            Home school Trip Planner
          </p>
          <p className="w-4/5 text-lg mt-3 text-gray-500">
            A Web Application for a client for easy access for the parents to
            view and purchase tickets for upcoming trips for their children.
          </p>
          <div className="flex items-center pt-4 justify-between w-3/4 text-gray-500 md:w-1/2 sm:w-full sm:flex sm:justify-evenly">
            <p>Made with</p>
            <div className="bg-neutral-800 w-72 h-12 flex items-center justify-evenly  text-gray-500 text-4xl rounded-md sm:w-52">
              <FaHtml5 />
              <FaCss3 />
              <FaJs />
              <FaReact />
            </div>
          </div>
          <div className="flex w-72 justify-between mt-12">
            <button
              onClick={toggleModal1}
              className="bg-teal-700 border-solid w-32 rounded-md text-gray-400 text-2xl hover:bg-teal-600 hover:text-gray-300"
            >
              Demo
            </button>
            <a
              href="https://github.com/Saalehid365/homeschoolTrippy"
              className="h-12 w-32 flex  items-center justify-evenly border border-solid border-gray-400 rounded-md text-gray-400 text-2xl hover:bg-neutral-600 hover:text-gray-300"
            >
              <FaGithub />
              Code
            </a>
          </div>
        </div>
      </div>
      {/* --- Modal1 --- */}
      {modal1 && (
        <div className="fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white h-3/4 w-1/3 rounded flex flex-col items-center justify-evenly p-6 shadow-lg">
            <div
              onClick={toggleModal1}
              className="bg-red relative bottom-10 left-1/2 mr-4 cursor-pointer font-bold bg-slate-400 w-12 h-8 flex justify-center text-xs border border-black items-center rounded-sm "
            >
              Close
            </div>

            <div className="mt-8 flex justify-center">
              <video
                autoPlay="true"
                src={homeedVid}
                className="h-92 w-4/5 border rounded-md "
              ></video>
            </div>

            <div>
              <h2 className="text-2xl mb-2">Home school trip planner</h2>
              <h3 className="bg-slate-500 w-36 p-1 mb-4 rounded-md text-white">
                Web Application
              </h3>
              <div className="text-slate-400">
                <p className="underline">Technologys used:</p>
                <p>
                  Here we have a web application which was built with HTML, CSS,
                  React for the front end and Stripe and Firebase for the
                  Backend.
                </p>
                <p className="underline">Issues</p>
                <p>
                  As this was the first time using stripe i found it difficult
                  to connect and retrieve the UUID from the ticket purchaser.
                </p>
                <p></p>
              </div>
            </div>
            <div>
              <a
                href="https://github.com/Saalehid365/irish-sea-moss-website"
                className="h-12 bg-slate-500 w-48 rounded-md text-xl text-white hover:bg-slate-600"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      )}
      {/* --- Modal2 --- */}
      {modal1 && (
        <div className="fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white h-3/4 w-1/3 rounded flex flex-col items-center justify-evenly p-6 shadow-lg">
            <div
              onClick={toggleModal1}
              className="bg-red relative bottom-10 left-1/2 mr-4 cursor-pointer font-bold bg-slate-400 w-12 h-8 flex justify-center text-xs border border-black items-center rounded-sm"
            >
              Close
            </div>
            <div className="mt-8 flex justify-center">
              <video
                autoPlay="true"
                src={homeedVid}
                className="h-92 w-4/5 border rounded-md "
              ></video>
            </div>

            <div>
              <h2 className="text-2xl mb-2">Home school trip planner</h2>
              <h3 className="bg-slate-500 w-36 p-1 mb-4 rounded-md text-white">
                Web Application
              </h3>
              <div className="text-slate-400">
                <p className="underline">Technologys used:</p>
                <p>
                  Here we have a web application which was built with HTML, CSS,
                  React for the front end and Stripe and Firebase for the
                  Backend.
                </p>
                <p className="underline">Issues</p>
                <p>
                  As this was the first time using stripe i found it difficult
                  to connect and retrieve the UUID from the ticket purchaser.
                </p>
                <p></p>
              </div>
            </div>
            <div>
              <button className="h-12 bg-slate-500 w-48 rounded-md text-xl text-white hover:bg-slate-600">
                Live
              </button>
            </div>
          </div>
        </div>
      )}
      {/* --- Modal3 --- */}
      {modal1 && (
        <div className="fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white h-3/4 w-1/3 rounded flex flex-col items-center justify-evenly p-6 shadow-lg">
            <div
              onClick={toggleModal1}
              className="bg-red relative bottom-10 left-1/2 mr-4 cursor-pointer font-bold bg-slate-400 w-12 h-8 flex justify-center text-xs border border-black items-center rounded-sm"
            >
              Close
            </div>
            <div className="mt-8 flex justify-center">
              <video
                autoPlay="true"
                src={homeedVid}
                className="h-92 w-4/5 border rounded-md "
              ></video>
            </div>

            <div>
              <h2 className="text-2xl mb-2">Home school trip planner</h2>
              <h3 className="bg-slate-500 w-36 p-1 mb-4 rounded-md text-white">
                Web Application
              </h3>
              <div className="text-slate-400">
                <p className="underline">Technologys used:</p>
                <p>
                  Here we have a web application which was built with HTML, CSS,
                  React for the front end and Stripe and Firebase for the
                  Backend.
                </p>
                <p className="underline">Issues</p>
                <p>
                  As this was the first time using stripe i found it difficult
                  to connect and retrieve the UUID from the ticket purchaser.
                </p>
                <p></p>
              </div>
            </div>
            <div>
              <button className="h-12 bg-slate-500 w-48 rounded-md text-xl text-white hover:bg-slate-600">
                Live
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
