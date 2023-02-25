import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <div
      className="contact bg-teal-900 flex flex-col items-center
    "
    >
      <div className="bg-teal-700 w-2/4 h-48 relative -top-12 shadow-xl rounded-lg">
        <div className="text-col w-full rounded-lg flex h-full px-12 flex-col items-start justify-evenly text-gray-500 ">
          <div>
            <p className="text-2xl text-neutral-300 ">Contact me</p>
          </div>
          <form className="flex flex-col w-full items-start justify-start">
            <div className="flex w-full justify-between">
              <div className="flex items-center justify-between w-1/2">
                <p className="text-neutral-300 ">Name:</p>
                <input
                  placeholder="Name"
                  type="text"
                  className="h-8 w-9/12 rounded-md mt-2  px-2"
                ></input>
              </div>
              <div className="flex items-center justify-evenly w-1/2">
                <p className="text-neutral-300">Email:</p>
                <input
                  placeholder="Email"
                  type="email"
                  className="h-8 w-2/3 rounded-md mt-2 px-2 "
                ></input>
              </div>
            </div>
            <div className="w-full flex items-center ">
              <p className="text-neutral-300 w-24">Message:</p>
              <input
                placeholder="Message"
                type="text"
                className="h-16 w-5/6 rounded-md mt-2 px-2"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
