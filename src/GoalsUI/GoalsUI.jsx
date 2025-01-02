import React from "react";
import img34 from "../Assets/34.png";
import Footerimg from "../component/Footerimg/Footerimg";

const GoalsUI = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-purple-900">
      {/* Left astronaut image */}
      <div className="absolute top-0 left-0 w-2/3 sm:w-1/4 md:w-2/6 2xl:w-2/6 lg:w-2/6">
        <img
          src={img34}
          alt="Left Astronaut"
          className="ml-[30%] sm:ml-[-30%] md:ml-[100%] 2xl:ml-[-290px] lg:ml-[-290px] mx-auto 
          2xl:rotate-0 lg:rotate-0 md:rotate-[250deg] md:mt-[-80px] rotate-[260deg]
          2xl:mt-[-100px] lg:mt-[-100px] mt-[-70px]"
        />
      </div>

      {/* Right astronaut image */}
      <div className="absolute top-0 right-0 w-2/3 sm:w-1/4 md:w-2/6 2xl:w-2/6 lg:w-2/6">
        <img
          src={img34}
          alt="Right Astronaut"
          className="sm:ml-24 2xl:ml-[200px] lg:ml-[200px] mt-[750px] md:mt-[900px] md:ml-[-280px] 
          2xl:mt-[-100px] lg:mt-[-100px] lg:rotate-0 2xl:rotate-0 md:rotate-[260deg] rotate-[260deg] ml-[-60px] relative"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center max-w-6xl gap-12 px-4 text-center 2xl:gap-40 lg:gap-40 md:flex-col md:px-6 md:text-left md:gap-2 2xl:flex-row lg:flex-row">
        <h1 className="text-4xl font-bold leading-snug sm:text-5xl md:text-6xl md:mt-[-120px] mt-[-50%]">
          The <span className="text-green-500">goals</span> we
          <br /> are trying to <br />
          achieve as an
          <br /> educating
          <br /> authority
        </h1>
        <p className="text-xl sm:text-xl md:text-3xl md:mt-5 mt-[-25px]">
          Our goal is to help Nigerians of all ages
          <br /> learn <span className="font-semibold">
            in-demand skills
          </span>{" "}
          like{" "}
          <span className="font-semibold text-green-500">
            VR, XR,
            <br /> and AI
          </span>
          , to get{" "}
          <span className="font-semibold text-green-500">
            guaranteed internships,
            <br />
          </span>{" "}
          <span className="font-semibold text-green-500">
            job opportunities
          </span>
          , and expert guidance
          <br /> to grow in these careers.
        </p>
      </div>
      <Footerimg />
    </div>
  );
};

export default GoalsUI;
