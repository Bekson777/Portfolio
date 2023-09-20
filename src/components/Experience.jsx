import React from "react";
import Html from "../assets/Html.png";
import Css from "../assets/Css.png";
import Javascript from "../assets/Javascript.png";
import Reactt from "../assets/React.png";
import Tailwind from "../assets/Tailwind.png";
import Api from "../assets/API.png";
import Github from "../assets/Github.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "Css",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: Javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Reactt,
      title: "HTML",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      src: Api,
      title: "API",
      style: "shadow-violet-500",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: Github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className=" py-6">tejerjerjfejejfjefjefjfe</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className=" w-25 h-28 mx-auto" />
              <p className=" mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
