import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className=" py-6">Submit the form below to get contact</p>
        </div>

        <div className=" flex justify-center items-center bg-gray-800 rounded-lg p-4">
          <form
            action="https://getform.io/f/0e92377f-44c5-4c63-aab7-83be268187f2"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <label htmlFor="" className=" my-2 text-gray-400">
              Enter your name
            </label>
            <input
              type="text"
              name="name"
              className=" p-2 mb-3 bg-transparent bg-gray-600 rounded-md text-white focus:outline-none"
            />

            <label htmlFor="" className=" my-2 text-gray-400">
              Enter your email
            </label>
            <input
              type="text"
              name="email"
              className=" p-2 mb-10 bg-transparent bg-gray-600 rounded-md text-white focus:outline-none"
            />
            <label htmlFor="" className=" mb-2 text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              rows="10"
              className=" p-2 bg-transparent bg-gray-600 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-5 mx-auto flex items-center justify-center rounded-md hover:scale-105 duration-300 w-full ">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
