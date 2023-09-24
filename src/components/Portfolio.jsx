import React from "react";
import Travelproject from "../assets/Travel-project.png";
import Omnifoodproject from "../assets/Omnifood-project.png";
import Bankistproject from "../assets/Bankist-project.png";
import Piggame from "../assets/Pig-game.png";
import Maptyprojec from "../assets/Mapty-project.png";
import Bankisapp from "../assets/Bankis-app.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Travelproject,
      demo: "https://main--verdant-rugelach-9bd6ea.netlify.app/",
      git: "https://github.com/Bekson777/Travel-Project",
    },
    {
      id: 2,
      src: Omnifoodproject,
      demo: "https://main--effortless-cendol-485378.netlify.app/",
      git: "https://github.com/Bekson777/Omnifood-Project",
    },
    {
      id: 3,
      src: Bankistproject,
      demo: "https://main--adorable-pastelito-8681da.netlify.app/",
      git: "https://github.com/Bekson777/Bankist-project",
    },
    {
      id: 4,
      src: Piggame,
      demo: "https://main--peaceful-treacle-2b9822.netlify.app/",
      git: "https://github.com/Bekson777/Pig-game",
    },
    {
      id: 5,
      src: Maptyprojec,
      demo: "https://main--eclectic-granita-70b9cc.netlify.app/",
      git: "https://github.com/Bekson777/Mapty-Project",
    },
    {
      id: 6,
      src: Bankisapp,
      demo: "https://main--charming-youtiao-5d2658.netlify.app/",
      git: "https://github.com/Bekson777/Bankist-app",
    },
  ];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl border-b-4 font-bold inline border-gray-500">
            Projects
          </p>
          <p className=" py-6">chek mys sdasd asdads</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, git }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className=" flex items-center justify-center">
                <button
                  onClick={() => openInNewTab(demo)}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-x-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => openInNewTab(git)}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-x-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
