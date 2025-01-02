import React, { useState } from "react";
import img1 from "../../Assets/1.png";

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-transparent">
        {/* Navigation for larger screens */}
        <ul className="hidden mt-5 ml-12 space-x-24 text-2xl font-medium sm:flex">
          <li>
            <a
              href="#"
              className="hover:text-customGreen"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="shadow-2xl hover:text-customGreen"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              PURPOSE
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-customGreen hover:text-white"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              TEAM
            </a>
          </li>
          <li>
            <img
              src={img1}
              alt="Team Logo"
              className="hidden sm:block lg:mt-[-140px] lg:w-96 lg:h-96"
            />
          </li>
          <li>
            <a
              href="#"
              className="hover:text-customGreen"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
            >
              PRIVACY
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="px-10 py-3 font-bold text-xl text-purple-900 bg-customGreen rounded-full hover:bg-green-600 mt-[-180px] mr-8 "
        >
          ENROLL NOW
        </a>

        {/* Hamburger icon for small screens */}
        <button
          className="absolute mt-20 text-3xl top-6 left-4 sm:hidden text-customGreen focus:outline-none"
          onClick={toggleDrawer}
        >
          ☰
        </button>
      </nav>

      {/* Drawer for small screens */}
      <div
        className={`fixed top-0 left-0 h-full bg-purple-800 bg-opacity-90 transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute text-3xl text-customGreen top-4 right-4 focus:outline-none"
          onClick={toggleDrawer}
        >
          ✕
        </button>
        <div className="flex flex-col items-center h-full mt-14 space-y-9">
          <a href="#" className="text-2xl text-white hover:text-customGreen">
            HOME
          </a>
          <a href="#" className="text-2xl text-white hover:text-customGreen">
            PURPOSE
          </a>
          <a href="#" className="text-2xl text-white hover:text-customGreen">
            TEAM
          </a>
          <a href="#" className="text-2xl text-white hover:text-customGreen">
            PRIVACY
          </a>
        </div>
      </div>

      {/* Centered image for small/medium screens */}
      <div className="flex justify-center mt-[-60px] sm:hidden">
        <img src={img1} alt="Team Logo" className="w-72 h-72" />
      </div>
    </div>
  );
}

export default NavBar;
