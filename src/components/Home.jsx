import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Myimg from "../assets/IMG_9176.jpeg";

function Home() {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white">
            I'm a Junior Front End Developer
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            I have 1 year of experience in front end development. Much of my
            time was devoted in Javascript but i worked on technologies like
            React, RESTful APIs, TailwindCSS, responsive web design principles.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-max px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          c
        </div>
        <div>
          <img
            alt="my"
            src={Myimg}
            className=" mx-auto md:w-full rounded-full  w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
