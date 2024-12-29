import React from "react";
import CopyofxoxoEDU from "../Assets/CopyofxoxoEDU.png";

function CareerProgram() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-purple-50 to-purple-200">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage: `url(${CopyofxoxoEDU})`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative flex flex-col max-w-6xl mx-auto overflow-hidden lg:flex-row">
        {/* Left Section */}
        <div className="p-6 text-xl lg:w-1/2">
          <h1 className="mt-24 mb-4 text-4xl font-bold text-purple-900 lg:text-5xl">
            KICKSTART YOUR{" "}
            <span className="text-green-500">LEARNING AND CAREER</span> WITH US
            TODAY!
          </h1>
          <p className="mb-6 leading-relaxed text-purple-900">
            Get Exclusive access to our{" "}
            <span className="font-bold text-yellow-500">Gold</span> Learning
            suite. It includes a{" "}
            <span className="font-bold">Personalised Program</span> with live
            training sessions led by global experts,{" "}
            <span className="font-bold">24/7 Training Support</span>, access to
            your <span className="font-bold">Personal Dashboard</span>. Unlock
            opportunities for internships and career growth as you build a
            strong foundation.
          </p>
          <p className="text-purple-900">
            Take the first step toward shaping your career with us today!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between p-6 mt-20 text-white rounded-md shadow-lg lg:w-3/2 bg-gradient-to-r from-purple-800 to-black 2xl:ml-72 lg:ml-72">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              3 MONTH <br />
              CERTIFICATE <br />
              PROGRAM
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Choice of Subject in the core syllabus</li>
              <li>Study and Project materials</li>
              <li>Online and Offline Classes based on schedule</li>
              <li>Guaranteed Work Opportunity</li>
              <div className="absolute left-0 right-0 w-96 h-1 2xl:ml-[800px] bg-white  2xl:bottom-48 "></div>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-xl text-gray-300 line-through">₹13799/month</p>
            <p className="text-4xl font-bold">
              ₹<span className="text-green-400">10799</span>/month
            </p>
            <p className="text-sm text-gray-300">
              30% off for Limited Time Only
            </p>
            <button className="px-6 py-3 mt-6 font-bold text-purple-900 bg-green-500 rounded-lg hover:bg-green-600">
              CHOOSE YOUR SYLLABUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerProgram;
