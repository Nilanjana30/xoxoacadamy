import React from "react";
import img1 from "../../Assets/1.png";

function NavBar() {
  return (
    <div>
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-transparent">
        <ul className="flex mt-5 ml-12 space-x-24 text-2xl font-medium ">
          <li>
            <a
              href="#"
              className="hover:text-customGreen "
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
              src={img1} // Replace with your logo file path
              alt="Team Logo"
              className="mt-[-140px] w-96 h-96"
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
          className="px-10 py-3 font-bold text-xl text-purple-900 bg-customGreen rounded-full hover:bg-green-600 mt-[-180px] mr-8"
        >
          ENROLL NOW
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
