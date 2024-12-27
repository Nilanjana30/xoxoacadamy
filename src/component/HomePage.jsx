import React from "react";
import NavBar from "./NavBar/NavBar";
import Footerimg from "./Footerimg/Footerimg";
import img2 from "../Assets/2.png";

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
        <div className="grid text-xl font-semibold gap-x-[500px] md:grid-cols-2 mt-[550px]">
          <div className="flex flex-col items-center justify-center">
            <h1
              className="block py-1 mr-20 text-6xl font-bold text-shadow-lg"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              BUILD YOUR
            </h1>
            <h1
              className="block py-1 text-6xl font-bold mr-28"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              FUTURE BY
            </h1>
            <h1
              className="block py-1 text-6xl font-bold mr-28"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              LEARNING
            </h1>
            <h1
              className="block py-1 mr-[30px] font-bold text-7xl"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              VR, XR & Ai
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center">
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
      <div className="absolute left-0 right-0 h-3 bg-purple-700 bottom-7"></div>
      <footer className="absolute bottom-0 left-0 right-0 ">
        <div className="flex items-center justify-center py-4 mb-[-300px]">
          <img
            src={img2}
            alt="Footer Decoration"
            className="w-full h-[650px] "
          />
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
