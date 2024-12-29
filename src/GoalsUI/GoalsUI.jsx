import React from "react";

import img34 from "../Assets/34.png";

const GoalsUI = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen text-white bg-purple-700">
      {/* Left astronaut image */}
      <div className="absolute top-0 left-0 w-2/6">
        <img src={img34} alt="Left Astronaut" className="ml-[-300px]" />
      </div>

      {/* Right astronaut image */}
      <div className="absolute top-0 right-0 w-2/6">
        <img src={img34} alt="Right Astronaut" className="w-full ml-52" />
      </div>

      {/* Content Section */}
      <div className="flex flex-row max-w-6xl px-6 text-center md:text-left gap-36">
        <h1 className="text-6xl font-bold leading-tight ">
          The <span className="text-green-500">goals</span> we
          <br /> are trying to <br />
          achieve as an
          <br /> educating
          <br /> authority
        </h1>
        <p className="text-3xl font-bold mt-28">
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

      {/* Bottom arrow */}
    </div>
  );
};

export default GoalsUI;
