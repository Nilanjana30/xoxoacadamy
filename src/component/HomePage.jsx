import React from "react";
import img1 from "../Assets/1.png";
function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden text-white bg-purple-900">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/bgvideo.mp4" // Ensure the file is in /public
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-transparent">
        <ul className="flex mt-5 ml-12 space-x-24 text-2xl font-medium ">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Purpose
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Team
            </a>
          </li>
          <li>
            <img
              src={img1} // Replace with your logo file path
              alt="Team Logo"
              className="mt-[-140px] w-96 h-96"
            />
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="px-10 py-3 font-bold text-xl text-purple-900 bg-green-500 rounded-full hover:bg-green-600 mt-[-180px] mr-8"
        >
          ENROLL NOW
        </a>
      </nav>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        {" "}
        <div className="grid text-xl font-semibold gap-x-[600px] md:grid-cols-2 mt-28">
          <div className="flex flex-col items-center justify-center">
            <h1 className="block py-1 mr-16 text-5xl font-bold ">
              {" "}
              BUILD YOUR{" "}
            </h1>
            <h1 className="block py-1 mr-24 text-5xl font-bold ">FUTURE BY</h1>
            <h1 className="block py-1 mr-24 text-5xl font-bold">LEARNING</h1>
            <h1 className="block py-1 text-6xl font-bold "> VR, XR & AI</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="block py-1 text-5xl font-bold ml-28"> HELPING</h1>
            <h1 className="block py-1 text-5xl font-bold ">NIGERIANS TO</h1>
            <h1 className="block py-1 text-5xl font-bold ">GET EMPLOYED</h1>
            <h1 className="block py-1 ml-20 text-5xl font-bold ">
              {" "}
              IN NO TIME
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-500"></div>
    </div>
  );
}

export default HomePage;
