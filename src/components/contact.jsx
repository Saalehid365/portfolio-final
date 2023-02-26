import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <div
      className="contact bg-teal-900 flex flex-col items-center
    "
    >
      <div className="bg-teal-700 w-2/4 h-64 relative -top-12 shadow-xl rounded-lg md:h-full sm:w-full">
        <div className="text-col w-full rounded-lg flex h-full px-12 flex-col items-start justify-evenly text-gray-500 ">
          <div className="sm:flex sm:justify-center sm:items-center sm:w-full">
            <p className="text-2xl text-neutral-300 ">Contact me</p>
          </div>
          <form className="flex flex-col w-full items-start justify-start md:h-full sm:py-4 ">
            <div className="flex w-full justify-between mb-4 md:flex md:flex-col sm:flex sm:items-center">
              <div className="flex items-center justify-between w-1/2 sm:flex-col">
                <p className="text-neutral-300 ">Name:</p>
                <input
                  placeholder="Name"
                  type="text"
                  className="h-8 w-9/12 rounded-md mt-2 px-2 md:w-screen sm:w-screen"
                ></input>
              </div>
              <div className="flex items-center justify-evenly w-1/2 md:ml-16 sm:flex-col sm:ml-0">
                <p className="text-neutral-300">Email:</p>
                <input
                  placeholder="Email"
                  type="email"
                  className="h-8 w-2/3 rounded-md mt-2 px-2 md:w-screen  sm:w-screen"
                ></input>
              </div>
            </div>
            <div className="w-full flex items-center sm:flex-col">
              <p className="text-neutral-300 w-24">Message:</p>
              <input
                placeholder="Message"
                type="text"
                className="h-24 w-5/6 rounded-md mt-2 px-2 md:w-screen sm:screen"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
