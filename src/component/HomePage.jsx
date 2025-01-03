import React from "react";
import NavBar from "./NavBar/NavBar";
import Footerimg from "./Footerimg/Footerimg";

function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden text-white bg-purple-900">
      {/* NavBar Component */}
      <div className="relative z-10">
        <NavBar />
      </div>

      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/bgvideo.mp4" // Ensure the file is in /public
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <div className="grid text-xl font-semibold gap-y-10 md:grid-cols-2 lg:gap-x-96 lg:mt-80 ">
          <div className="flex-col items-center justify-center mt-[-250px] lg:mt-[-20px]  ">
            <h1
              className="block py-1 text-5xl font-bold mr-[95px] lg:text-6xl text-shadow-lg"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              BUILD YOUR
            </h1>
            <h1
              className="block py-1 mr-32 text-5xl font-bold lg:text-6xl"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              FUTURE BY
            </h1>
            <h1
              className="block py-1 text-5xl font-bold lg:text-6xl mr-36"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              LEARNING
            </h1>
            <h1
              className="block py-1 mr-[45px] font-bold lg:text-7xl  mb-3 text-6xl"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              VR, XR & Ai
            </h1>
            <button className="px-10 py-3 mt-6 mr-32 text-2xl font-bold text-purple-900 rounded-full lg:mr-3 bg-customGreen hover:bg-green-600 sm:hidden ">
              ENROLL NOW
            </button>
          </div>

          <div className="flex-col items-center justify-center hidden md:hidden lg:block">
            <h1
              className="block py-1 text-6xl font-bold ml-28"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              HELPING
            </h1>
            <h1
              className="block py-1 text-6xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              NIGERIANS TO
            </h1>
            <h1
              className="block py-1 text-6xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              GET EMPLOYED
            </h1>
            <h1
              className="block py-1 ml-20 text-6xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              IN NO TIME
            </h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute left-0 right-0 h-2 bg-purple-800 bottom-7"></div>

      <Footerimg />
    </div>
  );
}

export default HomePage;
