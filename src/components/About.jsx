import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" tracking-wider w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          Hello. I am Beqa, 25 years old. I am a self-taught , An enthusiastic
          and detail-oriented Junior Frontend Developer with proficient
          knowledge in HTML, CSS, and JAVASCRIPT, as well as third-party
          libraries such as React. I will try utilize my technical skills and
          expertise to provide value to the employer and contribute to
          successful projects.
        </p>
        <br />
        <p className=" text-xl">
          My goal is to become competent in this profession and I am looking for
          a company where I will have the opportunity for professional
          development.
        </p>
      </div>
    </div>
  );
};

export default About;
